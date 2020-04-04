package app

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"

	rice "github.com/GeertJohan/go.rice"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
	"google.golang.org/grpc"
)

type App struct {
	config     *Config
	router     *httprouter.Router
	grpcServer *grpc.Server
	db         *sql.DB
}

func New(c *Config) (app *App, err error) {
	app = new(App)
	app.config = c
	app.grpcServer = grpc.NewServer()
	app.router = httprouter.New()
	// setup database
	err = app.dbSetup(c)
	return app, err
}

func (a *App) grpcSetup(c *Config) error {
	a.grpcServer = grpc.NewServer()
	return nil
}
func (a *App) dbSetup(c *Config) error {
	files := rice.MustFindBox("../../assets")
	sqlFile, err := files.Open("sql/v1/base.sql")
	if err != nil {
		return err
	}
	a.db, err = sql.Open("postgres",
		fmt.Sprintf("postgresql://%s@%s:%d?sslmode=disable", c.DbConfig.User, c.DbConfig.Host, c.DbConfig.Port))
	if err != nil {
		return err
	}
	dump, err := ioutil.ReadAll(sqlFile)
	if err != nil {
		return err
	}
	_, err = a.db.Exec(string(dump))
	log.Println("DB connected and updated")
	return err
}
func (a *App) loadAuth() {

}

func (a *App) Run() (err error) {
	ch := make(chan error)
	go func() {
		addr := fmt.Sprintf(":%d", a.config.Grpc.Port)
		lis, err := net.Listen("tcp", addr)
		if err != nil {
			ch <- err
			return
		}
		log.Printf("Serving gRPC on %s \n", addr)
		ch <- a.grpcServer.Serve(lis)
	}()

	go func() {
		addr := fmt.Sprintf(":%d", a.config.Http.Port)
		lis, err := net.Listen("tcp", addr)
		if err != nil {
			ch <- err
			return
		}
		log.Printf("Serving Http on %s \n", addr)
		webgrpc := grpcweb.WrapServer(a.grpcServer, grpcweb.WithAllowedRequestHeaders(
			[]string{"*"}))
		a.router.Handler("GET", "/api/webgrpc", webgrpc)
		a.router.Handler("HEAD", "/api/webgrpc", webgrpc)
		a.router.Handler("POST", "/api/webgrpc", webgrpc)
		a.router.Handler("PUT", "/api/webgrpc", webgrpc)
		a.router.Handler("PATCH", "/api/webgrpc", webgrpc)
		a.router.Handler("DELETE", "/api/webgrpc", webgrpc)
		a.router.Handler("CONNECT", "/api/webgrpc", webgrpc)
		a.router.Handler("OPTIONS", "/api/webgrpc", webgrpc)
		a.router.Handler("TRACE", "/api/webgrpc", webgrpc)
		a.router.Handler("*", "/api/grpc", a.grpcServer)
		ch <- http.Serve(lis, a.router)
	}()

	return <-ch
}

func withCORS(handler http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//Allow CORS here By * or specific origin
		w.Header().Set("Access-Control-Allow-Origin", "*")

		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		handler.ServeHTTP(w, r)
	}
}

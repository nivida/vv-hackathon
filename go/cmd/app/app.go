package app

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"

	log "github.com/sirupsen/logrus"

	rice "github.com/GeertJohan/go.rice"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	_ "github.com/lib/pq"
	"google.golang.org/grpc"
)

type App struct {
	config     *Config
	router     *mux.Router
	grpcServer *grpc.Server
	db         *sql.DB
}

func New(c *Config) (app *App, err error) {
	app = new(App)
	app.config = c
	app.router = mux.NewRouter()
	err = app.grpcSetup()
	if err != nil {
		return app, err
	}
	// setup database
	err = app.dbSetup(c)
	return app, err
}

func (a *App) grpcSetup() error {
	// TODO: SSL/TLS credentials
	a.grpcServer = grpc.NewServer()

	webgrpc := grpcweb.WrapServer(a.grpcServer,
		grpcweb.WithAllowedRequestHeaders(
			[]string{"*"}),
		grpcweb.WithAllowNonRootResource(true),
		grpcweb.WithCorsForRegisteredEndpointsOnly(false),
		grpcweb.WithOriginFunc(func(s string) bool {
			return true
		}),
	)
	a.router.NewRoute().
		Subrouter().
		PathPrefix("/api/webgrpc/").
		Handler(webgrpc)
	a.router.NewRoute().
		PathPrefix("/api/grpc/").
		HandlerFunc(a.grpcServer.ServeHTTP)
	return nil
}
func (a *App) dbSetup(c *Config) error {
	// TODO: move Rice-things to one folder
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

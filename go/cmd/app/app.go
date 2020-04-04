package app

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"

	"google.golang.org/grpc"

	rice "github.com/GeertJohan/go.rice"
	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
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
		ch <- http.Serve(lis, a.router)
	}()

	return <-ch
}

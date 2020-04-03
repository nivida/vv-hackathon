package app

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"log"
	"net"

	"golang.org/x/xerrors"
	"google.golang.org/grpc"

	rice "github.com/GeertJohan/go.rice"
	_ "github.com/lib/pq"
)

type App struct {
	// router     *httprouter.Router
	grpcServer *grpc.Server
	db         *sql.DB
}

func New(c *Config) (app *App, err error) {
	app = new(App)
	app.grpcServer = grpc.NewServer()
	// setup database
	err = app.dbSetup(c)
	return app, err
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
func (a *App) GetGrpc() *grpc.Server {
	return a.grpcServer
}

func (a *App) LoadModule() error {
	return xerrors.New("not implemented")
}
func (a *App) Run() error {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 3002))
	if err != nil {
		return err
	}

	return a.grpcServer.Serve(lis)
}

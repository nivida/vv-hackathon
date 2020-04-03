package app

import (
	"database/sql"
	"fmt"
	"net"

	"github.com/julienschmidt/httprouter"
	"golang.org/x/xerrors"
	"google.golang.org/grpc"

	_ "github.com/lib/pq"
)

type Config struct {
	DbConfig map[string]string `yaml:"db"`
}
type App struct {
	router     *httprouter.Router
	grpcServer *grpc.Server
	db         *sql.DB
}

func New() (app *App, err error) {
	app = new(App)
	app.grpcServer = grpc.NewServer()
	app.router = httprouter.New()
	app.db, err = sql.Open("postgres", "postgresql://root@localhost:26257?sslmode=disable")
	return app, err
}

func (a *App) GetRouter() *httprouter.Router {
	return a.router
}
func (a *App) GetGrpc() *grpc.Server {
	return a.grpcServer
}

func (a *App) LoadModule() error {
	return xerrors.New("not implemented")
}
func (a *App) Run() error {
	// TODO:
	// - multiple routines
	// - run grpc
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 3002))
	if err != nil {
		return err
	}

	return a.grpcServer.Serve(lis)
}

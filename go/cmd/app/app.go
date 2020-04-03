package app

import (
	"fmt"
	"net"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"google.golang.org/grpc"
)

type Config struct {
	DbConfig map[string]string `yaml:"db"`
}
type App struct {
	Router     *httprouter.Router
	GrpcServer *grpc.Server
}

func New() *App {
	return &App{
		GrpcServer: grpc.NewServer(),
		Router: httprouter.New(),
	}
}

func (a *App) grpc() {
	a.GrpcServer := grpc.NewServer()
}
func (a *App) LoadModule() error {

}
func (a *App) Run() error {
	// TODO:
	// - multiple routines
	// - run grpc
	go func() {
		lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 3002))
		if err != nil {
			panic("failed to listen: %v", err)
		}
		a.GrpcServer.Serve(lis)

	}()
	return http.ListenAndServe("localhost:3000", a.router)
}

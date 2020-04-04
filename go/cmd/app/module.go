package app

import (
	"database/sql"

	"github.com/julienschmidt/httprouter"
	"github.com/nivida/vv-hackathon/go/module"
	"google.golang.org/grpc"
)

func (a *App) LoadModule(m module.Module) error {
	return m.Load(a)
}

func (a *App) GetRouter() *httprouter.Router {
	return a.router
}
func (a *App) GetDb() *sql.DB {
	return a.db
}
func (a *App) GetGrpc() *grpc.Server {
	return a.grpcServer
}

package module

import (
	"database/sql"

	"github.com/julienschmidt/httprouter"
	"google.golang.org/grpc"
)

type AppInterface interface {
	GetGrpc() *grpc.Server
	GetRouter() *httprouter.Router
	GetDb() *sql.DB
}

type Module interface {
	Load(AppInterface) error
}

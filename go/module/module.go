package module

import (
	"database/sql"

	"github.com/gorilla/mux"
	"google.golang.org/grpc"
)

type AppInterface interface {
	GetGrpc() *grpc.Server
	GetRouter() *mux.Router
	GetDb() *sql.DB
}

type Module interface {
	Load(AppInterface) error
}

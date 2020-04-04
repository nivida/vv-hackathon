package module

import (
	"database/sql"

	"google.golang.org/grpc"
)

type AppInterface interface {
	GetGrpc() *grpc.Server
	GetDb() *sql.DB
}

type Module interface {
	Load(AppInterface) error
}

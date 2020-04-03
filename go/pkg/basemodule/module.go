package basemodule

import (
	"database/sql"

	"google.golang.org/grpc"
)

type AppInterface interface {
	GetGrpc() *grpc.Server
	GetDb() *sql.Conn
}

type Module interface {
	Load(AppInterface) error
}

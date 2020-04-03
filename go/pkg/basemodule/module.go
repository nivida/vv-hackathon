package basemodule

import (
	"github.com/julienschmidt/httprouter"
	"google.golang.org/grpc"
)

type AppInterface interface {
	GetRouter() *httprouter.Router
	GetGrpc() *grpc.Server
}

type Module interface {
	Load(AppInterface) error
}

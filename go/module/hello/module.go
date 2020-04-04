package hello

import (
	"github.com/nivida/vv-hackathon/go/module"
	pb "github.com/nivida/vv-hackathon/go/proto/hello"
)

type Module struct {
}

func (m *Module) Load(a module.AppInterface) error {
	// http
	http := new(helloHttp)
	a.GetRouter().GET("/", http.SayHello)
	// grpc
	svc := new(helloGrpc)
	pb.RegisterGreeterServer(a.GetGrpc(), svc)
	return nil
}

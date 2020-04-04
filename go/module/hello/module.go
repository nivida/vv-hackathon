package hello

import (
	"github.com/nivida/vv-hackathon/go/module"
	pb "github.com/nivida/vv-hackathon/go/proto/hello"
	log "github.com/sirupsen/logrus"
)

type Module struct {
}

func (m *Module) Load(a module.AppInterface) error {
	// http
	http := new(helloHttp)
	a.GetRouter().NewRoute().PathPrefix("/hello").HandlerFunc(http.SayHello)
	log.Infof("hallooo1", a.GetRouter())

	log.Infof("Registering route \n")
	// grpc
	svc := new(helloGrpc)
	pb.RegisterGreeterServer(a.GetGrpc(), svc)
	return nil
}

package hello

import (
	"context"
	"fmt"
	"time"

	"github.com/nivida/vv-hackathon/go/proto/hello"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc/metadata"
)

type helloGrpc struct {
}

func (h *helloGrpc) Greet(ctx context.Context, v *hello.Visiter) (*hello.HelloMsg, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return &hello.HelloMsg{
			Msg: fmt.Sprintf("Hi dear stranger named %s... (no metadata given)", v.GetName()),
		}, nil
	}
	log.Infof("info about meta: %v", md)
	md.Set("Last-seen", time.Now().String())
	if len(md.Get("name")) > 0 {
		return &hello.HelloMsg{
			Msg: fmt.Sprintf("I know you from your metadata: \n you say you're %s... but I'll call you %s", v.GetName(), md.Get("name")[0]),
		}, nil
	}
	return &hello.HelloMsg{
		Msg: fmt.Sprintf("You have meta, but none with key name... so I'll call you %s", v.GetName()),
	}, nil
}

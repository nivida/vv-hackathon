package hello

import (
	"context"
	"fmt"

	"github.com/nivida/vv-hackathon/go/proto/hello"
)

type helloGrpc struct {
}

func (h *helloGrpc) Greet(ctx context.Context, v *hello.Visiter) (*hello.HelloMsg, error) {
	return &hello.HelloMsg{
		Msg: fmt.Sprintf("Hi dear stranger named %s", v.GetName()),
	}, nil
}

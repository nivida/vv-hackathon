package grpc

import (
	"context"
	"log"

	"github.com/nivida/vv-hackathon/go/pkg/userlogin"
	"golang.org/x/xerrors"
	"google.golang.org/grpc/metadata"
)

type AuthGrpc struct{}

func (a *AuthGrpc) Check(ctx context.Context) (*userlogin.Login, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, xerrors.New("Failed reading metadata")
	}
	authVal := md.Get("Authentication")
	log.Println(authVal)
	authMethod := authVal //strings.Split(authVal, " ")
	if len(authMethod) < 2 {
		return nil, xerrors.New("No authentication given.")
	}
	switch authMethod[0] {
	case "Demo":
		return a.demo(ctx)
	case "Basic":
		return a.basic(ctx)
	case "Bearer":
		return a.bearer(ctx)
	}
	return nil, xerrors.New("Invalid authentication method")
}

func (a *AuthGrpc) demo(context.Context) (*userlogin.Login, error) {
	return &userlogin.Login{
		UserType: "demo",
		Groups: []interface{}{
			"demo",
		},
	}, nil
}
func (a *AuthGrpc) bearer(context.Context) (*userlogin.Login, error) {
	return nil, xerrors.New("not implemented yet")
}

func (a *AuthGrpc) basic(context.Context) (*userlogin.Login, error) {
	return nil, xerrors.New("not implemented yet")
}

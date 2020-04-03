package grpc

import (
	"context"
	"strings"

	"github.com/nivida/vv-hackathon/go/pkg/userlogin"
	"golang.org/x/xerrors"
)

type Auth struct{}

func (a *Auth) Check(ctx context.Context) (*userlogin.Login, error) {
	authVal := ctx.Value("Authentication").(string)
	authMethod := strings.Split(authVal, " ")
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

func (a *Auth) demo(context.Context) (*userlogin.Login, error) {
	return &userlogin.Login{
		UserType: "demo",
		Groups: []interface{}{
			"demo",
		},
	}, nil
}
func (a *Auth) bearer(context.Context) (*userlogin.Login, error) {
	return nil, xerrors.New("not implemented yet")
}

func (a *Auth) basic(context.Context) (*userlogin.Login, error) {
	return nil, xerrors.New("not implemented yet")
}

package lessons

import (
	"context"

	"github.com/nivida/vv-hackathon/go/module"
	"github.com/nivida/vv-hackathon/go/proto/entity/user"
	pb "github.com/nivida/vv-hackathon/go/proto/usermanager"
)

type LessonModule struct {
}

func (m *LessonModule) Load(a module.AppInterface) error {
	svc := new(GrpcLesson)
	// add vars
	// init (DB...?)
	pb.RegisterUserManagerServer(a.GetGrpc(), svc)
	return nil
}

type GrpcLesson struct{}

func (s *GrpcLesson) GetUsers(f *user.Filter, m pb.UserManager_GetUsersServer) error {
	return nil
}

func (s *GrpcLesson) GetUser(ctx context.Context, f *user.Filter) (*user.User, error) {
	return nil, nil
}

package lessons

import (
	"github.com/nivida/vv-hackathon/go/module"
	pb "github.com/nivida/vv-hackathon/go/proto/lessonRepository"
)

type Module struct {
}

func (m *Module) Load(a module.AppInterface) error {
	svc := new(grpcLessons)
	// add vars
	// init (DB...?)
	pb.RegisterLessonRepositoryServer(a.GetGrpc(), svc)
	return nil
}

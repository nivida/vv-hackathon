package lessons

import (
	"database/sql"

	"github.com/nivida/vv-hackathon/go/module"
	pb "github.com/nivida/vv-hackathon/go/proto/lessonRepository"
)

type Module struct {
	db *sql.DB
}

func (m *Module) Load(a module.AppInterface) error {
	// grpc
	svc := new(grpcLessons)
	svc.db = a.GetDb()
	pb.RegisterLessonRepositoryServer(a.GetGrpc(), svc)
	return nil
}

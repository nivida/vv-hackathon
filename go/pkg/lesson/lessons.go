package lessons

import (
	"github.com/nivida/vv-hackathon/go/pkg/basemodule"
	pb "github.com/nivida/vv-hackathon/go/proto/lessons"
)

type LessonModule struct {
}

func (m *LessonModule) Load(a basemodule.AppInterface) error {
	pb.RegisterRouteGuideServer(a.GetGrpc(), new(GrpcLesson))
	return nil
}

type GrpcLesson struct{}

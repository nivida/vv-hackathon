package lessonRepository

import (
	"context"

	"github.com/nivida/vv-hackathon/go/module"
	lessonRepository "github.com/nivida/vv-hackathon/go/proto/lessonRepository"
	assignmentRepository "github.com/nivida/vv-hackathon/go/proto/assignmentRepository"
	pbbool "github.com/nivida/vv-hackathon/go/proto/shared/pbbool"
	"golang.org/x/xerrors"
)

type LessonModule struct {
}

func (m *LessonModule) Load(a module.AppInterface) error {
	svc := new(GrpcLesson)
	// add vars
	// init (DB...?)
	lessonRepository.RegisterLessonRepositoryServer(a.GetGrpc(), svc)
	return nil
}

type GrpcLesson struct{}

func (s *GrpcLesson) GetLessons(context.Context, *lessonRepository.Filter) (*lessonRepository.Lesson, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *GrpcLesson) CreateLesson(context.Context, *lessonRepository.Lesson) (*lessonRepository.Lesson, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *GrpcLesson) DeleteLesson(context.Context, *lessonRepository.Lesson) (*pbbool.Bool, error) {

	return nil, xerrors.New("not implemented yet")
}
func (s *GrpcLesson) AddAssignment(context.Context, *lessonRepository.LessonAssignment) (*pbbool.Bool, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *GrpcLesson) DeleteAssignment(context.Context, *lessonRepository.LessonAssignment) (*pbbool.Bool, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *GrpcLesson) GetAssignments(context.Context, *lessonRepository.Filter) (*assignmentRepository.Assignment, error) {
	return nil, xerrors.New("not implemented yet")
}

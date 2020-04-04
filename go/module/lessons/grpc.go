package lessons

import (
	"context"

	assignmentRepository "github.com/nivida/vv-hackathon/go/proto/assignmentRepository"
	pb "github.com/nivida/vv-hackathon/go/proto/lessonRepository"
	pbbool "github.com/nivida/vv-hackathon/go/proto/shared/pbbool"
	"golang.org/x/xerrors"
)

type grpcLessons struct{}

func (s *grpcLessons) GetLessons(context.Context, *pb.Filter) (*pb.Lesson, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *grpcLessons) CreateLesson(context.Context, *pb.Lesson) (*pb.Lesson, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *grpcLessons) DeleteLesson(context.Context, *pb.Lesson) (*pbbool.Bool, error) {

	return nil, xerrors.New("not implemented yet")
}
func (s *grpcLessons) AddAssignment(context.Context, *pb.LessonAssignment) (*pbbool.Bool, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *grpcLessons) DeleteAssignment(context.Context, *pb.LessonAssignment) (*pbbool.Bool, error) {
	return nil, xerrors.New("not implemented yet")
}
func (s *grpcLessons) GetAssignments(context.Context, *pb.Filter) (*assignmentRepository.Assignment, error) {
	return nil, xerrors.New("not implemented yet")
}

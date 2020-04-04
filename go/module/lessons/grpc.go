package lessons

import (
	"context"
	"database/sql"

	assignmentRepository "github.com/nivida/vv-hackathon/go/proto/assignmentRepository"
	pb "github.com/nivida/vv-hackathon/go/proto/lessonRepository"
	pbbool "github.com/nivida/vv-hackathon/go/proto/shared/pbbool"
	"golang.org/x/xerrors"
)

type grpcLessons struct {
	db *sql.DB
}

func (s *grpcLessons) GetLessons(ctx context.Context, f *pb.Filter) (*pb.Lesson, error) {
	conn, err := s.db.Conn(ctx)
	if err != nil {
		return nil, err
	}
	stmt, err := conn.PrepareContext(ctx, `
		SELECT * 
		FROM lessons`)
	if err != nil {
		return nil, err
	}
	rows, err := stmt.Query()
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		rows.Scan()
	}
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

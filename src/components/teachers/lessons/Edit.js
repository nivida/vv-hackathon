import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import moment from "moment";

const Edit = (props) => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.assignmentRepo.getAll().then(setAssignments);
      store.userRepo.getUsersByRole('student').then(setStudents);
      store.lessonRepository.getLessonById(props.lesson).then(setLesson);
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.start = values.start.toDate().getTime();
    values.end = values.end.toDate().getTime();
    store.lessonRepository.update(props.lesson, values).then((resp) => {
      console.log(resp);
      setIsVisible(false);
      message.success('successfully updated lesson!');
    });
  };

  console.log({lesson});

  const initialValues = lesson ? {
    ...lesson,
    start: moment.unix(lesson.start / 1000),
    end: moment.unix(lesson.end / 1000)
  } : null;

  return (
    <div>
      <Button type="primary" onClick={() => {
        setIsVisible(true)
      }}>
        Edit
      </Button>
      {(isVisible && lesson && assignments) ?
        <LessonForm title={'Edit Lesson'}
                    onCancel={() => setIsVisible(false)}
                    onSubmit={handleSubmit}
                    assignments={assignments}
                    students={students}
                    lesson={initialValues}/> : null}
    </div>
  )
};

export default observer(Edit);

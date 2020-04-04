import {observer} from "mobx-react-lite";
import * as React from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {useContext, useEffect, useState} from "react";
import {Button} from "antd";

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
    store.lessonRepository.update(props.lesson, values).then(console.log);
  };

  return (
    <div>
      <Button type="primary" onClick={() => {setIsVisible(true)}}>
        Edit
      </Button>

      {(isVisible && lesson) ?
      <LessonForm buttonName="Edit" onSubmit={handleSubmit} assignments={assignments} students={students}
                  lesson={lesson}/> : null}
    </div>
  )
};

export default observer(Edit);
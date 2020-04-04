import {observer} from "mobx-react-lite";
import * as React from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {useContext, useEffect, useState} from "react";

const Edit = (props) => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);
  const [lesson, setLesson] = useState(null);
  //
  // useEffect(() => {
  //   store.assignmentRepo.getAll().then(setAssignments);
  //   store.userRepo.getAllStudents().then(setStudents);
  //   store.lessonRepository.getLessonById(props.lesson).then(setLesson);
  // }, []);

  const handleSubmit = () => {
      // TODO: Save: store.lessonRepository
  };

  return (
    <LessonForm onSubmit={handleSubmit} assignments={assignments} students={students} lesson={lesson}/>
  )
};

export default observer(Edit);
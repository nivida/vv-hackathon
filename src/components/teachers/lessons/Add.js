import {observer} from "mobx-react-lite";
import * as React from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {useContext, useEffect, useState} from "react";

const Add = () => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getAll().then(setAssignments);
    // store.userRepo.getAllStudents().then(setStudents);
  }, []);

  const handleSubmit = (values) => {
    values.start = values.start.toDate().getTime();
    values.end = values.end.toDate().getTime();
    store.lessonRepository.create(values).then(console.log);
  };

  return (
    <LessonForm onSubmit={handleSubmit} assignments={assignments} students={students}/>
  )
};

export default observer(Add);
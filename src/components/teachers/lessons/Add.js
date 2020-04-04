import {observer} from "mobx-react-lite";
import * as React from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {useContext, useEffect, useState} from "react";
import {Button} from "antd";

const Add = () => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.assignmentRepo.getAll().then(setAssignments);
      store.userRepo.getUsersByRole('student').then(setStudents);
    }
  }, []);

  const handleSubmit = (values) => {
    values.start = values.start.toDate().getTime();
    values.end = values.end.toDate().getTime();
    store.lessonRepository.create(values).then(console.log);
  };

  return (
    <div>
      <Button type="primary" onClick={() => {setIsVisible(true)}}>
        Add
      </Button>
      {(isVisible) ?
        <LessonForm buttonName="Edit" onSubmit={handleSubmit} assignments={assignments} students={students}/> : null}
    </div>
  )
};

export default observer(Add);
import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";

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
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.start = values.start.toDate().getTime();
    values.end = values.end.toDate().getTime();
    values.teacher = store.authRepo.user.uid;
    console.log(values);
    store.lessonRepository.create(values).then((res) => {
      console.log(res);
      setIsVisible(false);
      message.success('successfully added lesson!')
    });
  };

  return <div>
    <Button type="primary" icon={<PlusOutlined/>} onClick={() => setIsVisible(true)}>
      Add
    </Button>
    {isVisible ? <LessonForm onCancel={() => setIsVisible(false)}
                             onSubmit={handleSubmit}
                             assignments={assignments}
                             students={students}/> : null}
  </div>
};

export default observer(Add);

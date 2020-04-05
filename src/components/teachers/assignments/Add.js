import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import AssignmentForm from "./AssignmentForm";

const Add = ({onAddSuccess}) => {
  const store = useContext(StoreContext);
  const [students, setStudents] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.userRepo.getUsersByRole('student').then(setStudents);
      store.materialRepo.getAll().then(setMaterials);
      store.exerciseRepo.getAll().then(setExercises)
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.deadline = values.deadline.toDate().getTime();
    values.author = store.authRepo.user.uid;

    store.assignmentRepo.create(values).then((res) => {
      setIsVisible(false);
      message.success('successfully added assignment!');
      onAddSuccess && onAddSuccess(res);
    });
  };

  return <div>
    <Button type="primary" icon={<PlusOutlined/>} onClick={() => setIsVisible(true)}>
      Add
    </Button>
    {isVisible ? <AssignmentForm title={'Add Lesson'}
                             onCancel={() => setIsVisible(false)}
                             onSubmit={handleSubmit}
                             materials={materials}
                             exercises={exercises}
                             students={students}/> : null}
  </div>
};

export default observer(Add);

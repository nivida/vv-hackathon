import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import AssignmentForm from "./AssignmentForm";

const Add = ({onAddSuccess}) => {
  const store = useContext(StoreContext);
  const [materials, setMaterials] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.materialRepo.getAll().then(setMaterials);
      store.exerciseRepo.getAll().then(setExercises)
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.deadline = values.deadline.toDate().getTime();
    values.author = store.authRepo.user.uid;
console.log(values);
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
    {isVisible ? <AssignmentForm title={'Add Assignment'}
                             submitTitle={'Add'}
                             onCancel={() => setIsVisible(false)}
                             onSubmit={handleSubmit}
                             materials={materials}
                             exercises={exercises}/> : null}
  </div>
};

export default observer(Add);

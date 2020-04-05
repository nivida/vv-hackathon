import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import ExercisesForm from "./ExercisesForm";

const Add = ({onAddSuccess}) => {
  const store = useContext(StoreContext);
  const [isVisible, setIsVisible] = useState(null);

  const handleSubmit = (values) => {
    store.exerciseRepo.create(values).then((res) => {
      setIsVisible(false);
      message.success('successfully added exercise!');
      onAddSuccess && onAddSuccess(res);
    });
  };

  return <div>
    <Button type="primary" icon={<PlusOutlined/>} onClick={() => setIsVisible(true)}>
      Add
    </Button>
    {isVisible ? <ExercisesForm title={'Add Exercise'}
                                submitTitle={'Add'}
                                onCancel={() => setIsVisible(false)}
                                onSubmit={handleSubmit}/> : null}
  </div>
};

export default observer(Add);

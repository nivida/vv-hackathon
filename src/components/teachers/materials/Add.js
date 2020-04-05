import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import MaterialForm from "./MaterialForm";

const Add = ({onAddSuccess}) => {
  const store = useContext(StoreContext);
  const [isVisible, setIsVisible] = useState(null);

  const handleSubmit = (values) => {
    store.materialRepo.create(values).then((res) => {
      setIsVisible(false);
      message.success('successfully added material!');
      onAddSuccess && onAddSuccess(res);
    });
  };

  return <div>
    <Button type="primary" icon={<PlusOutlined/>} onClick={() => setIsVisible(true)}>
      Add
    </Button>
    {isVisible ? <MaterialForm title={'Add Material'}
                               submitTitle={'Add'}
                               onCancel={() => setIsVisible(false)}
                               onSubmit={handleSubmit}/> : null}
  </div>
};

export default observer(Add);

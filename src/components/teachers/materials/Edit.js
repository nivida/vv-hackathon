import {observer} from "mobx-react-lite";
import * as React from "react";
import MaterialForm from "./MaterialForm";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";

const Edit = ({onEditSuccess, ...props}) => {
  const store = useContext(StoreContext);
  const [material, setMaterial] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.materialRepo.getById(props.material).then(setMaterial);
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.deadline = values.deadline.toDate().getTime();
    store.materialRepo.update(props.material, values).then((resp) => {
      setIsVisible(false);
      message.success('successfully updated material!');
      onEditSuccess && onEditSuccess(resp);
    });
  };

  return (
    <div>
      <Button type="primary" onClick={() => {
        setIsVisible(true)
      }}>
        Edit
      </Button>
      {(isVisible && material) ?
        <MaterialForm title={'Edit Material'} submitTitle={'Edit'}
                      onCancel={() => setIsVisible(false)}
                      onSubmit={handleSubmit}
                      material={material ? material : null}/> : null}
    </div>
  )
};

export default observer(Edit);

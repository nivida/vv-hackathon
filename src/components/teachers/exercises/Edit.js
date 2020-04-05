import {observer} from "mobx-react-lite";
import * as React from "react";
import ExercisesForm from "./ExercisesForm";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";

const Edit = ({onEditSuccess, ...props}) => {
  const store = useContext(StoreContext);
  const [exercise, setExercise] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.exerciseRepo.getById(props.exercise).then(setExercise);
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    store.exerciseRepo.update(props.exercise, values).then((resp) => {
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
      {(isVisible && exercise) ?
        <ExercisesForm title={'Edit Exercises'} submitTitle={'Edit'}
                       onCancel={() => setIsVisible(false)}
                       onSubmit={handleSubmit}
                       exercise={exercise ? exercise : null}/> : null}
    </div>
  )
};

export default observer(Edit);

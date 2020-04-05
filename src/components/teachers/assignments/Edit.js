import {observer} from "mobx-react-lite";
import * as React from "react";
import AssignmentForm from "./AssignmentForm";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, message} from "antd";
import moment from "moment";

const Edit = ({onEditSuccess, ...props}) => {
  const store = useContext(StoreContext);
  const [assignment, setAssignment] = useState(null);
  const [students, setStudents] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      console.log(props.assignment);


      store.assignmentRepo.getById(props.assignment).then(setAssignment);
      store.userRepo.getUsersByRole('student').then(setStudents);
      store.materialRepo.getAll().then(setMaterials);
      store.exerciseRepo.getAll().then(setExercises)
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.deadline = values.deadline.toDate().getTime();
    store.assignmentRepo.update(props.assignment, values).then((resp) => {
      setIsVisible(false);
      message.success('successfully updated assignment!');
      onEditSuccess && onEditSuccess(resp);
    });
  };

  const initialValues = assignment ? {
    ...assignment,
    deadline: moment.unix(assignment.deadline / 1000)
  } : null;

  return (
    <div>
      <Button type="primary" style={{width: '94px'}} onClick={() => {
        setIsVisible(true)
      }}>
        Edit
      </Button>
      {(isVisible && assignment && students && materials && exercises) ?
        <AssignmentForm title={'Edit Assignment'} submitTitle={'Edit'}
                    onCancel={() => setIsVisible(false)}
                    onSubmit={handleSubmit}
                    assignment={initialValues}
                    students={students}
                    materials={materials}
                    exercises={exercises}/> : null}
    </div>
  )
};

export default observer(Edit);

/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Content from "../../shared/Content";
import {ArrowLeftOutlined} from "@ant-design/icons";
import ButtonLink from "../../shared/ButtonLink";
import {Card, Spin} from "antd";
import AssignmentResources from "./AssignmentResources";
import AssignmentComments from "./AssignmentComments";
import {StoreContext} from "../../../repositories/rootRepo";
import Exercises from "./Exercises";

const Assignment = ({match: {params}}) => {
  const store = useContext(StoreContext);
  const [assignment, setAssignment] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [materials, setMaterials] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getById(params.id).then(assignment => {
      setAssignment(assignment);
    });
  }, [params.id]);

  useEffect(() => {
    if (assignment) {
      store.exerciseRepo.getByAssignment(assignment).then(exercises => {
        setExercises(exercises);
      });
      store.materialRepo.getByAssignment(assignment).then(materials => {
        console.log({materials});
        setMaterials(materials);
      });
    }
  }, [assignment && assignment.id]);

  if (!assignment) {
    return <Spin/>;
  }

  return (
    <Content>
      <h1 style={{marginLeft: -30}}>
        <ButtonLink href={'/'} type={'link'} icon={<ArrowLeftOutlined/>}/>
        {assignment.name}
      </h1>
      <div style={{marginTop: 30}}>
        <h3>Learning Material</h3>
        {materials ? <AssignmentResources materials={materials}/> : <Spin/>}
      </div>
      <div style={{marginTop: 30}}>
        <h3>Exercises</h3>
        {
          exercises ? <Exercises exercises={exercises}/> : <Spin/>
        }
      </div>
      <div style={{marginTop: 30}}>
        <AssignmentComments/>
      </div>
    </Content>
  )
};

export default observer(Assignment);

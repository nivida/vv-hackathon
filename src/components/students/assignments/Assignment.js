import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Content from "../../shared/Content";
import {ArrowLeftOutlined} from "@ant-design/icons";
import ButtonLink from "../../shared/ButtonLink";
import {Card, Spin} from "antd";
import AssignmentResources from "./AssignmentResources";
import ExerciseSmall from "../exercise/ExerciseSmall";
import AssignmentComments from "./AssignmentComments";
import {StoreContext} from "../../../repositories/rootRepo";

const Assignment = ({match: {params}}) => {
  const store = useContext(StoreContext);
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getById(params.id).then(assignment => {
      setAssignment(assignment);
    });
  }, [params.id]);

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
        <Card title={false} bordered={false}>
          <AssignmentResources/>
        </Card>
      </div>
      <div style={{marginTop: 30}}>
        <h3>Exercise</h3>
        <Card title={false} bordered={false}>
          <ExerciseSmall/>
        </Card>
      </div>
      <div style={{marginTop: 30}}>
        <AssignmentComments/>
      </div>
    </Content>
  )
};

export default observer(Assignment);

import * as React from "react";
import {Tabs} from "antd";
import AssignmentsTable from "./assignments/AssignmentsTable";
import LessonsTable from "./lessons/LessonsTable";
import Content from "../shared/Content";
import MaterialsTable from "./materials/MaterialsTable";
import ExercisesTable from "./exercises/ExercisesTable";

const Dashboard = (props) => {
  return (
    <Content type={'wide'}>
      <Tabs defaultActiveKey="1" size={'large'}>
        <Tabs.TabPane tab="Lessons" key="1">
          <LessonsTable/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Assignments" key="2">
          <AssignmentsTable/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Exercises" key="3">
          <ExercisesTable/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Materials" key="4">
          <MaterialsTable/>
        </Tabs.TabPane>
      </Tabs>
    </Content>
  )
};

export default Dashboard;

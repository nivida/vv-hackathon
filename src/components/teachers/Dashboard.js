import * as React from "react";
import {Tabs} from "antd";
import AssignmentsTable from "./assignments/AssignmentsTable";
import LessonsTable from "./lessons/LessonsTable";
import Content from "../shared/Content";

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
      </Tabs>
    </Content>
  )
};

export default Dashboard;

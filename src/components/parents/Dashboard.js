import * as React from "react";
import Content from "../shared/Content";
import "./Dashboard.scss";
import {Tabs} from "antd";
import Student from "./Student";

const Dashboard = (props) => {
  return (
    <Content type={'wide'}>
      <Tabs defaultActiveKey="1" size={'large'}>
        <Tabs.TabPane tab="Fabian" key="1">
          <Student />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Selina" key="2">
          <Student />
        </Tabs.TabPane>
      </Tabs>
    </Content>
  )
};

export default Dashboard;

import * as React from "react";
import Lessons from "./timeline/Lessons";
import {Lesson} from "../../models/lesson";
import {observer} from "mobx-react-lite";
import Content from "../shared/Content";

const Dashboard = (props) => {

  const lessons = [
    Lesson.fromPlainObject({
      id: '1',
      name: 'Math',
      callUrl: 'https://www.google.com'
    }),
    Lesson.fromPlainObject({
      id: '2',
      name: 'History'
    })
  ];

  return (
    <Content>
      <h1>Timeline</h1>
      <Lessons lessons={lessons}/>
    </Content>
  )
};

export default observer(Dashboard);

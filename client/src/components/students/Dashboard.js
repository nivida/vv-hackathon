import * as React from "react";
import Lessons from "./timeline/Lessons";
import {Lesson} from "../../models/lesson";

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
    <div style={{padding: '20px 20%'}}>
      <h1>Timeline</h1>
      <Lessons lessons={lessons}/>
    </div>
  )
};

export default Dashboard;

import * as React from "react";
import {useContext, useEffect, useState} from "react";
import Lessons from "./timeline/Lessons";
import {observer} from "mobx-react-lite";
import Content from "../shared/Content";
import {StoreContext} from "../../repositories/rootRepo";
import {Spin} from "antd";

const Dashboard = (props) => {

  const store = useContext(StoreContext);
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    store.lessonRepository.getLessonsByUser(store.authRepo.user.uid).then(lessons => {
      console.log(lessons);
      setLessons(lessons);
    });
  }, []);

  return (
    <Content>
      <h1>Timeline</h1>
      {lessons ? <Lessons lessons={lessons}/> : <Spin/>}
    </Content>
  )
};

export default observer(Dashboard);

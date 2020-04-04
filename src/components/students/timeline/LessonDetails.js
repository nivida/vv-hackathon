import * as React from "react";
import {useContext, useEffect, useState} from "react";
import Assignments from "./Assignments";
import LessonResources from "./LessonResources";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, Spin} from "antd";
import {observer} from "mobx-react-lite";
import {PlayCircleOutlined} from "@ant-design/icons";

const LessonDetails = ({lesson, style = {}}) => {

  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getByLesson(lesson).then(ass => {
      console.log(ass);
      setAssignments(ass);
    });
  }, [lesson && lesson.id]);

  console.log(assignments);

  return (
    <div style={style}>
      {lesson.callUrl ? (
        <div style={{marginBottom: 30}}>
          <Button icon={<PlayCircleOutlined/>} type={'primary'}>Join Virtual Class</Button>
          {/*<h4>Link</h4>*/}
          {/*<a target={'_blank'} rel="noopener noreferrer" href={lesson.callUrl}>{lesson.callUrl}</a>*/}
        </div>
      ) : null}
      <LessonResources/>
      {assignments ? <Assignments assignments={assignments}/> : <Spin/>}
    </div>
  )
};

export default observer(LessonDetails);

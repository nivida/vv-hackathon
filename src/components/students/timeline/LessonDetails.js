import * as React from "react";
import {useContext, useEffect, useState} from "react";
import Assignments from "./Assignments";
import {StoreContext} from "../../../repositories/rootRepo";
import {Button, Spin} from "antd";
import {observer} from "mobx-react-lite";
import {PlayCircleOutlined} from "@ant-design/icons";
import LessonResources from "./LessonResources";

const LessonDetails = ({lesson, style = {}}) => {

  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [materials, setMaterials] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getByLesson(lesson).then(ass => {
      console.log(ass);
      setAssignments(ass);
    });
    store.materialRepo.getByLesson(lesson).then(setMaterials);
  }, [lesson && lesson.id]);

  console.log({materials});
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
      {materials ? <LessonResources materials={materials}/> : <Spin/>}
      {assignments ? <Assignments assignments={assignments}/> : <Spin/>}
    </div>
  )
};

export default observer(LessonDetails);

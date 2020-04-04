import * as React from "react";
import LessonItem from "./LessonItem";
import {List} from "antd";
import {LessonRepository} from "../../../repositories/lessonRepository";

const Lessons = ({lessons = []}) => {
  const repo = new LessonRepository();
  // repo.getLessonsByUser()

  return (
    <List
      grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1}}
      dataSource={lessons}
      renderItem={lesson => (
        <List.Item key={lesson.id}>
          <LessonItem lesson={lesson}/>
        </List.Item>
      )}
    />
  );
};

export default Lessons;

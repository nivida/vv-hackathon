import * as React from "react";
import LessonItem from "./LessonItem";
import {List} from "antd";

const Lessons = ({lessons = []}) => {

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

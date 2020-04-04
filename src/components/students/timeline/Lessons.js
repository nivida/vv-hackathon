import * as React from "react";
import LessonItem from "./LessonItem";
import {ConfigProvider, Empty, List} from "antd";

const Lessons = ({lessons = []}) => {

  return (
    <ConfigProvider renderEmpty={() => (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No lessons'}/>
    )}>
      <List
        grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1}}
        dataSource={lessons}
        renderItem={lesson => (
          <List.Item key={lesson.id}>
            <LessonItem lesson={lesson}/>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
};

export default Lessons;

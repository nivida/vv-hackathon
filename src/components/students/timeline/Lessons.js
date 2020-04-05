import * as React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BookOutlined} from "@ant-design/icons";
import LessonItem from "./LessonItem";
// import * as moment from "moment";
// import {timeFormat} from "../../../utils/dateFormats";

const Lessons = ({lessons = []}) => {

  const defaultElementProps = {
    iconStyle: {background: '#fff', color: '#5901b8'},
    icon: <BookOutlined/>,
    className: "vertical-timeline-element--work",
  };

  return (
    <VerticalTimeline layout={'1-column'}>
      {lessons.map(lesson => (
        <VerticalTimelineElement
          key={lesson.id}
          // date={`${moment.unix(lesson.start).format(timeFormat)} - ${moment.unix(lesson.end).format(timeFormat)}`}
          {...defaultElementProps}
        >
          {/*<h3 className="vertical-timeline-element-title">{lesson.title}</h3>*/}
          {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
          <LessonItem lesson={lesson}/>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );

  // return (
  //   <ConfigProvider renderEmpty={() => (
  //     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No lessons'}/>
  //   )}>
  //     <List
  //       grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1}}
  //       dataSource={lessons}
  //       renderItem={lesson => (
  //         <List.Item key={lesson.id}>
  //           <LessonItem lesson={lesson}/>
  //         </List.Item>
  //       )}
  //     />
  //   </ConfigProvider>
  // );
};

export default Lessons;

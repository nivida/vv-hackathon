import * as React from "react";
import {Empty} from "antd";

const LessonResources = (props) => {
  return (
    <div style={{marginTop: 10}}>
      <h4>Resources</h4>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No resources'}/>
    </div>
  )
};

export default LessonResources;

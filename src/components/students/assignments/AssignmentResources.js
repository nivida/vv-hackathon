import * as React from "react";
import {observer} from "mobx-react-lite";
import {Empty} from "antd";

const AssignmentResources = (props) => {
  return (
    <div>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No resources'}/>
    </div>
  )
};

export default observer(AssignmentResources);

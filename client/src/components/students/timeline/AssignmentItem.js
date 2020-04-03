import * as React from "react";
import {Button} from "antd";
import {ZoomInOutlined} from "@ant-design/icons";

const AssignmentItem = ({assignment}) => {
  return (
    <div style={{width: '100%'}}>
      <div style={{display: 'inline-block'}}>
        <p>{assignment.name}</p>
      </div>
      <div style={{float: 'right'}}>
        <Button icon={<ZoomInOutlined/>}>View</Button>
      </div>
    </div>
  )
};

export default AssignmentItem;

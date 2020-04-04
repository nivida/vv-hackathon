import * as React from "react";
import {ZoomInOutlined} from "@ant-design/icons";
import ButtonLink from "../../shared/ButtonLink";

const AssignmentItem = ({assignment}) => {
  return (
    <div style={{width: '100%'}}>
      <div style={{display: 'inline-block'}}>
        <p>{assignment.name}</p>
      </div>
      <div style={{float: 'right'}}>
        <ButtonLink href={`/assignments/${assignment.id}`} icon={<ZoomInOutlined/>}>View</ButtonLink>
      </div>
    </div>
  )
};

export default AssignmentItem;

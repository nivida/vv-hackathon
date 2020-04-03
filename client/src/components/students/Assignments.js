import * as React from "react";
import {List} from "antd";
import AssignmentItem from "./AssignmentItem";

const Assignments = ({assignments = []}) => {
  return (
    <List
      grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1}}
      dataSource={assignments}
      renderItem={assignment => (
        <List.Item key={assignment.id}>
          <AssignmentItem assignment={assignment}/>
        </List.Item>
      )}
    />
  )
};

export default Assignments;

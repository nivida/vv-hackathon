import * as React from "react";
import {ConfigProvider, Empty, List} from "antd";
import AssignmentItem from "./AssignmentItem";

const Assignments = ({assignments = []}) => {
  return (
    <div style={{marginTop: 10}}>
      <h4>Assignments</h4>
      <ConfigProvider renderEmpty={() => (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No assignments'}/>
      )}>
        <List
          size={'large'}
          bordered={true}
          dataSource={assignments}
          renderItem={assignment => (
            <List.Item key={assignment.id}>
              <AssignmentItem assignment={assignment}/>
            </List.Item>
          )}
        />
      </ConfigProvider>
    </div>
  )
};

export default Assignments;

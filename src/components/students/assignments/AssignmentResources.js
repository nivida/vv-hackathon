import * as React from "react";
import {observer} from "mobx-react-lite";
import {Card, Empty, List} from "antd";
import Material from "./Material";

const AssignmentResources = ({materials = []}) => {

  if (materials.length === 0) {
    return <Card title={false} bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No materials'}/>
    </Card>
  }

  return (
    <div>
      <Card title={false} bordered={false}>
        <List
          size="large"
          bordered
          dataSource={materials}
          renderItem={material => (
            <List.Item>
              <Material material={material}/>
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
};

export default observer(AssignmentResources);

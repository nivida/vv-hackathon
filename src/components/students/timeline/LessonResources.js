import * as React from "react";
import {Empty, List} from "antd";
import Material from "../assignments/Material";

const LessonResources = ({materials = []}) => {
  return (
    <div style={{marginTop: 10, marginBottom: 30}}>
      <h4>Resources</h4>
      {
        materials.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No materials'}/>
          ) :
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
      }
    </div>
  )
};

export default LessonResources;

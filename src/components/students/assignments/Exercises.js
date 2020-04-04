import * as React from "react";
import {Card, Empty, List, Steps} from "antd";
import ExerciseSmall from "../exercise/ExerciseSmall";

const Exercises = ({exercises}) => {

  if (exercises.length === 0) {
    return <Card title={false} bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No exercises'}/>
    </Card>
  }

  return (
    <div>
      <Steps size="small" current={0} style={{marginTop: 15}}>
        <Steps.Step title=""/>
        <Steps.Step title=""/>
        <Steps.Step title=""/>
      </Steps>
      <List
        grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1}}
        dataSource={exercises}
        renderItem={exercise => (
          <List.Item key={exercise.id}>
            <Card title={false} bordered={false} style={{marginTop: 20}} key={exercise.id}>
              <ExerciseSmall exercise={exercise}/>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Exercises;

import * as React from "react";
import {Card, Empty, List} from "antd";
import ExerciseSmall from "../exercise/ExerciseSmall";

const Exercises = ({exercises}) => {

  if (exercises.length === 0) {
    return <Card title={false} bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No exercises'}/>
    </Card>
  }

  return (
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
  );
};

export default Exercises;

import * as React from "react";
import {Radio} from "antd";
import SubmittableExercise from "./shared/SubmittableExercise";

const SelectExercise = ({exercise}) => {

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <SubmittableExercise exercise={exercise}>
      <Radio.Group>
        {(exercise.choices || []).map(choice => (
          <Radio key={choice} style={radioStyle} value={choice}>{choice}</Radio>
        ))}
      </Radio.Group>
    </SubmittableExercise>
  )
};

export default SelectExercise;

import * as React from "react";
import {Button, Radio} from "antd";

const SelectExercise = ({exercise}) => {

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <div>
      <h4>{exercise.question}</h4>
      <Radio.Group>
        {(exercise.choices || []).map(choice => (
          <Radio key={choice} style={radioStyle} value={choice}>{choice}</Radio>
        ))}
      </Radio.Group>
      <div style={{marginTop: 30}}>
        <Button type={'primary'}>Submit</Button>
      </div>
    </div>
  )
};

export default SelectExercise;

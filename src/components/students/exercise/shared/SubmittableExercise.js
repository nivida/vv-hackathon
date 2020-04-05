import * as React from "react";
import {Button} from "antd";

const SubmittableExercise = ({exercise, title, children, button = true, onSubmit}) => {
  if (!exercise) return null;

  return (
    <div>
      <h4>{title || exercise.question || exercise.title}</h4>
      {children}
      {button && (
        <div style={{marginTop: 30}}>
          <Button type={'primary'} onClick={() => onSubmit && onSubmit()}>Submit</Button>
        </div>
      )}
    </div>
  )
};

export default SubmittableExercise;

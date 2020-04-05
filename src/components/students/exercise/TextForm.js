import * as React from "react";
import {Input} from "antd";
import SubmittableExercise from "./shared/SubmittableExercise";

const TextForm = ({exercise}) => {
  return (
    <SubmittableExercise exercise={exercise} title={exercise.question}>
      <Input.TextArea rows={6}/>
    </SubmittableExercise>
  )
};

export default TextForm;

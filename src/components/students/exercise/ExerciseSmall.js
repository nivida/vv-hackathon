import * as React from "react";
import {observer} from "mobx-react-lite";
import MathSolutionForm from "./MathSolutionForm";
import SelectExercise from "./SelectExercise";
import AudioRecordForm from "./AudioRecordForm";
import TextForm from "./TextForm";

const ExerciseSmall = ({exercise}) => {

  console.log({exercise});

  if (exercise.type === 'select') {
    return <SelectExercise exercise={exercise}/>;
  }

  if (exercise.type === 'math') {
    return <MathSolutionForm exercise={exercise}/>;
  }

  if (exercise.type === 'audio-record') {
    return <AudioRecordForm exercise={exercise}/>;
  }

  if (exercise.type === 'text') {
    return <TextForm exercise={exercise}/>;
  }

  return 'unknown exercise type';
};

export default observer(ExerciseSmall);

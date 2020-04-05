import * as React from "react";
import {observer} from "mobx-react-lite";
import MathSolutionForm from "./MathSolutionForm";
import SelectExercise from "./SelectExercise";
import AudioRecordForm from "./AudioRecordForm";
import TextForm from "./TextForm";
import SortingExercise from "./SortingExercise";
import VideoRecordForm from "./VideoRecordForm";

const ExerciseSmall = ({exercise}) => {

  console.log({exercise});

  if (exercise.type === 'select') {
    return <SelectExercise exercise={exercise}/>;
  }

  if (exercise.type === 'math') {
    return <MathSolutionForm exercise={exercise}/>;
  }

  if (exercise.type === 'audio-recording') {
    return <AudioRecordForm exercise={exercise}/>;
  }

  if (exercise.type === 'text') {
    return <TextForm exercise={exercise}/>;
  }

  if (exercise.type === 'sorting') {
    return <SortingExercise exercise={exercise}/>;
  }

  if (exercise.type === 'video-recording') {
    return <VideoRecordForm exercise={exercise}/>;
  }

  return `unknown exercise type: ${exercise.type}`;
};

export default observer(ExerciseSmall);

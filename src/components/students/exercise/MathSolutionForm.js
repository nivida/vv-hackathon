import * as React from "react";
import {useEffect, useRef} from "react";
import {Drawer} from "handwritten-mathematics-recogniser";
import {HandwrittenExpressionRecogniser} from 'handwritten-mathematics-recogniser/expression';
import SubmittableExercise from "./shared/SubmittableExercise";
import {useDimensions} from "../../../hooks/useDimensions";
import fraction from "../../../assets/images/fraction_1.png";

const MathSolutionForm = ({exercise}) => {

  const canvasEl = useRef(null);
  const [ref, {width}] = useDimensions({liveMeasure: true});

  useEffect(() => {
    new Drawer(canvasEl.current);
  }, [canvasEl]);

  const handleRecognise = () => {
    const expression = HandwrittenExpressionRecogniser.recognise(canvasEl.current);
    console.log(expression);
  };

  console.log(width);

  return (
    <SubmittableExercise exercise={exercise} onSubmit={handleRecognise}>
      <img src={fraction} style={{marginBottom: 10}}/>
      <div ref={ref} style={{width: '100%', border: '1px solid #e6e6e6', marginBottom: 10}}>
        <canvas ref={canvasEl} width={width || 400} height={(width || 400) * 0.75}/>
      </div>

      {/*<Button onClick={handleRecognise}>Recognise</Button>*/}
    </SubmittableExercise>
  );
};

export default MathSolutionForm;

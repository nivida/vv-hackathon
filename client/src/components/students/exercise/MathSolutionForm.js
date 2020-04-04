import * as React from "react";
import {useEffect, useRef} from "react";
import {Drawer} from "handwritten-mathematics-recogniser";
import {Button} from "antd";
import {HandwrittenExpressionRecogniser} from 'handwritten-mathematics-recogniser/expression';

const MathSolutionForm = (props) => {

  const canvasEl = useRef(null);

  useEffect(() => {
    new Drawer(canvasEl.current);
  }, [canvasEl]);

  const handleRecognise = () => {
    const expression = HandwrittenExpressionRecogniser.recognise(canvasEl.current);
    console.log(expression);
  };

  return (
    <div>
      <div style={{width: '100%', border: '1px solid #e6e6e6', marginBottom: 10}}>
        <canvas ref={canvasEl} width={600}/>
      </div>

      <Button onClick={handleRecognise}>Recognise</Button>
    </div>
  );
};

export default MathSolutionForm;

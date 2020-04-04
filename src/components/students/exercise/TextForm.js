import * as React from "react";
import {Button, Input} from "antd";

const TextForm = ({exercise}) => {
  return (
    <div>
      <h4>{exercise.question}</h4>
      <Input.TextArea rows={6}/>
      <div style={{marginTop: 30}}>
        <Button type={'primary'}>Submit</Button>
      </div>
    </div>
  )
};

export default TextForm;

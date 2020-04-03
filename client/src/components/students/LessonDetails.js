import * as React from "react";
import Assignments from "./Assignments";
import {Assignment} from "../../models/assignment";

const LessonDetails = ({lesson, style = {}}) => {

  const assignments = [
    Assignment.fromPlainObject({})
  ];

  return (
    <div style={style}>
      <p>lesson details</p>
      <Assignments assignments={assignments}/>
    </div>
  )
};

export default LessonDetails;

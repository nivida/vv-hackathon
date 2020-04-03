import * as React from "react";
import Assignments from "./Assignments";
import {Assignment} from "../../models/assignment";
import LessonResources from "./LessonResources";

const LessonDetails = ({lesson, style = {}}) => {

  const assignments = [
    Assignment.fromPlainObject({name: 'Assignment 1'}),
    Assignment.fromPlainObject({name: 'Assignment 2'}),
  ];

  return (
    <div style={style}>
      {lesson.callUrl ? (
        <div>
          <h4>Link</h4>
          <a target={'_blank'} rel="noopener noreferrer" href={lesson.callUrl}>{lesson.callUrl}</a>
        </div>
      ) : null}
      <LessonResources/>
      <Assignments assignments={assignments}/>
    </div>
  )
};

export default LessonDetails;

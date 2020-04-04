import * as React from "react";
import Assignments from "./Assignments";
import {Assignment} from "../../../models/assignment";
import LessonResources from "./LessonResources";
import {AssignmentRepo} from "../../../repositories/assignmentRepo";

const LessonDetails = ({lesson, style = {}}) => {
  const repo =  new AssignmentRepo();
  console.log(repo.getAll().then(console.log).catch(console.log));

  const assignments = [
    Assignment.fromPlainObject({id: 1, name: 'Assignment 1'}),
    Assignment.fromPlainObject({id: 2, name: 'Assignment 2'}),
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

import * as React from "react";
import {UserTypes} from "./models/user";
import StudentApp from "./StudentApp";
import TeacherApp from "./TeacherApp";

const ProtectedApp = (props) => {

  const userType = UserTypes.teacher;

  if (userType === UserTypes.student) {
    return <StudentApp/>
  }

  if (userType === UserTypes.teacher) {
    return <TeacherApp/>
  }

  return <p>unknown user type</p>;
};

export default ProtectedApp;

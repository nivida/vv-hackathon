import * as React from "react";
import {UserTypes} from "../../models/user";
import StudentDashboard from "../students/Dashboard";
import TeacherDashboard from "../teachers/Dashboard";

const Dashboard = (props) => {

  const userType = UserTypes.student;

  if (userType === UserTypes.student) {
    return <StudentDashboard/>
  }

  if (userType === UserTypes.teacher) {
    return <TeacherDashboard/>
  }

  return <p>unknown user type</p>;
};

export default Dashboard;

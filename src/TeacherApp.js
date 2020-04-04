import * as React from "react";
import {Route, Switch} from "react-router";
import {observer} from "mobx-react-lite";
import Dashboard from "./components/teachers/Dashboard";
import AppLayout from "./components/shared/AppLayout";
import AssignmentRoutes from "./components/teachers/assignments/Routes";
import LessonRoutes from "./components/teachers/lessons/Routes";

const TeacherApp = (props) => {
  return (
    <AppLayout>
      <div style={{padding: '20px 10%'}}>
        <Switch>
          <Route exact path={`/`} component={Dashboard}/>
          <Route path={`/assignments`} component={AssignmentRoutes}/>
          <Route path={`/lessons`} component={LessonRoutes}/>
        </Switch>
      </div>
    </AppLayout>
  )
};

export default observer(TeacherApp);

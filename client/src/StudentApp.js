import * as React from "react";
import {observer} from "mobx-react-lite";
import {Route, Switch} from "react-router";
import AssignmentRoutes from "./components/students/assignments/Routes";
import Dashboard from "./components/students/Dashboard";
import AppLayout from "./components/shared/AppLayout";

const StudentApp = (props) => {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={`/`} component={Dashboard}/>
        <Route path={`/assignments`} component={AssignmentRoutes}/>
      </Switch>
    </AppLayout>
  )
};

export default observer(StudentApp);

import * as React from "react";
import {observer} from "mobx-react-lite";
import {Route, Switch} from "react-router";
import Dashboard from "./components/teachers/Dashboard";
import AppLayout from "./components/shared/AppLayout";

const TeacherApp = (props) => {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={`/`} component={Dashboard}/>
      </Switch>
    </AppLayout>
  )
};

export default observer(TeacherApp);

import * as React from "react";
import AppLayout from "./components/shared/AppLayout";
import {Route, Switch} from "react-router";
import Dashboard from "./components/dashboard/Dashboard";

const ProtectedApp = (props) => {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={`/`} component={Dashboard}/>
      </Switch>
    </AppLayout>
  )
};

export default ProtectedApp;

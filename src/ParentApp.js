import * as React from "react";
import {Route, Switch} from "react-router";
import {observer} from "mobx-react-lite";
import Dashboard from "./components/parents/Dashboard";
import AppLayout from "./components/shared/AppLayout";

const ParentApp = (props) => {
  return (
    <AppLayout>
      <div style={{padding: '20px 10%'}}>
        <Switch>
          <Route exact path={`/`} component={Dashboard}/>
        </Switch>
      </div>
    </AppLayout>
  )
};

export default observer(ParentApp);

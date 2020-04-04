import * as React from "react";
import {Route, Switch} from "react-router";
import NotFound from "../../shared/NotFound";
import Assignment from "./Assignment";

const Routes = (props) => {
  const match = props.match;
  return (
    <Switch>
      <Route exact path={`${match.path}/:id`} component={Assignment}/>
      <Route path={`${match.path}/*`} component={NotFound}/>
    </Switch>
  )
};

export default Routes;

import * as React from "react";
import {Route, Switch} from "react-router";
import NotFound from "../../shared/NotFound";
import Material from "./Material";

const Routes = (props) => {
  const match = props.match;
  return (
    <Switch>
      <Route exact path={`${match.path}/:id`} component={Material}/>
      <Route path={`${match.path}/*`} component={NotFound}/>
    </Switch>
  )
};

export default Routes;

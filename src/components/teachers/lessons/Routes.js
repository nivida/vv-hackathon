import * as React from "react";
import {Route, Switch} from "react-router";
import NotFound from "../../shared/NotFound";
import Lesson from "./Lesson";

const Routes = (props) => {
  const match = props.match;
  return (
    <Switch>
      <Route exact path={`${match.path}/:id`} component={Lesson}/>
      <Route path={`${match.path}/*`} component={NotFound}/>
    </Switch>
  )
};

export default Routes;

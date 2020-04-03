import React, {useContext} from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {compose} from "./utils/compose";
import {StoreContext} from "./repositories/rootRepo";
import {observer} from "mobx-react";

const ProtectedRoute = (props) => {

  const {component: Component, redirectPath = '/login', ...rest} = props;
  const store = useContext(StoreContext);

  const renderRoute = (Component, props, authenticated) => {
    if (authenticated) {
      return <Component {...props}/>;
    }

    return <Redirect to={{
      pathname: redirectPath,
      state: {from: props.location}
    }}/>
  };

  return <Route {...rest} render={props => renderRoute(Component, props, store.authRepo.authenticated)}/>
};

export default compose(
  withRouter,
  observer,
)(ProtectedRoute);

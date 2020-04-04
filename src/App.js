import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import ScrollToTop from "./components/shared/ScrollToTop";
import {Route, Switch} from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedApp from "./ProtectedApp";
import Login from "./components/login/Login";
import {observer} from "mobx-react-lite";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop/>
        <Switch>
          <Route path={`/login`} component={Login}/>
          <ProtectedRoute path={`/`} component={ProtectedApp}/>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default observer(App);

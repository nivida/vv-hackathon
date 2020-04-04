import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import ScrollToTop from "./components/shared/ScrollToTop";
import {Route, Switch} from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedApp from "./ProtectedApp";
import Login from "./components/login/Login";
import {GreeterClient} from "proto-clients/proto/hello_grpc_web_pb";
import {Visiter} from "proto-clients/proto/hello_pb";
import {executeRequest} from "./utils/grpcRequest";
import {production} from "./config";

function App() {

    useEffect(() => {
      const helloClient = new GreeterClient(production.grpcEndpoint, null);
      const request = new Visiter();
      request.setName('foo');

      executeRequest(helloClient, helloClient.greet, request, { name: '1'  }).then((msg) => {
        console.log(msg.response.toObject(), msg.status);
      });
    }, []);

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

export default App;

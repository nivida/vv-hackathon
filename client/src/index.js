import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/stylesheets/app.scss'
import * as serviceWorker from './serviceWorker';
import {FirebaseAppProvider} from "reactfire";
import {config} from "../config";

// TODO: Add node ENV check for config
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={config.dev.firebase}>
    <App/>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

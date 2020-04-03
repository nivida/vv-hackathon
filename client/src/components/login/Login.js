import * as React from "react";
import {useState} from "react";
import {Redirect} from "react-router";
import "./Login.scss";
import LoginForm from "./LoginForm";
import BlankLayout from "../shared/BlankLayout";

const Login = (props) => {

  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState({});

  const isLoggedIn = true;

  const onSubmit = (user) => {
    setLogin(user);
    setErrors({});

    // TODO implement
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }

  return <BlankLayout>
    <div className={'container'}>
      <div className={'content'}>
        <LoginForm onSubmit={onSubmit} errors={errors} login={login}/>
      </div>
    </div>
  </BlankLayout>
};

export default Login;

import * as React from "react";
import {useState} from "react";
import {Redirect} from "react-router";
import "./Login.scss";
import LoginForm from "./LoginForm";
import BlankLayout from "../shared/BlankLayout";
import {observer} from "mobx-react";
import {useContext} from "react";
import {StoreContext} from "../../repositories/rootRepo";

const Login = (props) => {

  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState({});

  const store = useContext(StoreContext);

  const onSubmit = (user) => {
    setLogin(user);
    setErrors({});

    store.authRepo.login(user);
  };

  if (store.authRepo.authenticated) {
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

export default observer(Login);

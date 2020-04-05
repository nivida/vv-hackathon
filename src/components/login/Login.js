import * as React from "react";
import {useContext, useState} from "react";
import {Redirect} from "react-router";
import "./Login.scss";
import LoginForm from "./LoginForm";
import BlankLayout from "../shared/BlankLayout";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../repositories/rootRepo";
import {message} from "antd";
import logo from "../../assets/images/logo-schule-aarau.png";

const Login = (props) => {

  const [login, setLogin] = useState({});

  const store = useContext(StoreContext);

  const onSubmit = (user) => {
    setLogin(user);

    store.authRepo.login(user).then((user) => {
      console.log(user);
      store.authRepo.loadUser(user);
    }).catch(err => {
      message.error(err.message);
    });
  };

  if (store.authRepo.authenticated) {
    return <Redirect to="/"/>;
  }

  return <BlankLayout>
    <div className={'container'}>
      <div className={'content'} style={{textAlign: 'center'}}>
        <img src={logo} style={{width: '250px', marginBottom: '20px'}}/>
        <LoginForm onSubmit={onSubmit} login={login}/>
      </div>
    </div>
  </BlankLayout>
};

export default observer(Login);

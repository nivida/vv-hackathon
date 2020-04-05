import {Layout} from "antd";
import React from "react";
import Account from "./Account";
import "./header.scss"
import logo from "../../assets/images/logo-schule-aarau.png";

const Header = (props) => {
  const {
    // isMobile = false,
    children
  } = props;

  return <Layout.Header style={{background: '#fff'}}>
    <div className={'left-content'}  style={{float: 'left'}}>
      <img src={logo} style={{width: '150px'}}/>
    </div>
    {children}
    <div className={'right-content'} style={{float: 'right'}}>
      <Account/>
    </div>
  </Layout.Header>
};

export default Header;

import {Layout} from "antd";
import React from "react";
import Account from "./Account";
import "./header.scss"

const Header = (props) => {
  const {
    // isMobile = false,
    children
  } = props;

  return <Layout.Header style={{background: '#fff'}}>
    {/*<div className={'left-content'}>*/}
    {/*  <Brand collapsed={isMobile}/>*/}
    {/*</div>*/}
    {children}
    <div className={'right-content'} style={{float: 'right'}}>
      <Account/>
    </div>
  </Layout.Header>
};

export default Header;

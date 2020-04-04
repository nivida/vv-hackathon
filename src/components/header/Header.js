import {Avatar, Layout, Tooltip} from "antd";
import React, {useContext, useEffect, useState} from "react";
import Account from "./Account";
import avatar from "../../assets/images/avatar.png";
import "./header.scss"
import {StoreContext} from "../../repositories/rootRepo";

const Header = (props) => {

  const {
    // isMobile = false,
    children
  } = props;

  const store = useContext(StoreContext);
  const [name, setName] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    setName(store.authRepo.user.name);
    setCredits(store.authRepo.user.credits);
  }, []);

  return <Layout.Header style={{background: '#fff'}}>
    {/*<div className={'left-content'}>*/}
    {/*  <Brand collapsed={isMobile}/>*/}
    {/*</div>*/}
    {children}
    <div className={'left-content'} style={{float: 'left'}}>
      <Avatar
        size={"large"}
        className={'user-avatar'}
        alt="avatar"
        src={avatar}
      />
      <Tooltip title={'Credits: '+ credits}>
        <span style={{paddingLeft: '10px'}}>
          {name}
        </span>
      </Tooltip>
    </div>
    <div className={'right-content'} style={{float: 'right'}}>
      <Account/>
    </div>
  </Layout.Header>
};

export default Header;

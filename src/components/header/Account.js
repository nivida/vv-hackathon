import {Avatar, Button, Dropdown, Menu, Progress, Tooltip} from "antd";
import * as React from "react";
import {useContext} from "react";
import {LogoutOutlined} from "@ant-design/icons";
import {StoreContext} from "../../repositories/rootRepo";
import {observer} from "mobx-react-lite";
import SettingFilled from "@ant-design/icons/es/icons/SettingFilled";
import avatar from "../../assets/images/avatar.png";
import {useState} from "react";
import {useEffect} from "react";

const Account = (props) => {

  const store = useContext(StoreContext);
  const [name, setName] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    setName(store.authRepo.user.name);
    setCredits(store.authRepo.user.credits);
  }, []);


  const logout = () => {
    store.authRepo.logout().then(() => {
      console.log('logged out', !store.authRepo.authenticated);
    });
  };

  const menu = (
    <Menu className={'user-menu'} selectedKeys={[]}>
      <Menu.Item key="settings">
        <SettingFilled/> Settings
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        <LogoutOutlined/> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar
          size={"large"}
          className={'user-avatar'}
          alt="avatar"
          src={avatar}
        />
      </Dropdown>
      <Tooltip title={'Credits: ' + credits}>
        <span style={{paddingLeft: '10px'}}>
          {name}
        </span>
        <div style={{height: '20px', marginTop: '-49px', marginLeft: '50px'}}>
          <Progress strokeLinecap="square" percent={75} status="active" showInfo={true}/>
        </div>
      </Tooltip>
    </div>

  )
};

export default observer(Account);

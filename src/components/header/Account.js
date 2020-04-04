import {Avatar, Button, Dropdown, Menu} from "antd";
import * as React from "react";
import {useContext} from "react";
import avatar from "./../../assets/images/avatar.png";
import {LogoutOutlined} from "@ant-design/icons";
import {StoreContext} from "../../repositories/rootRepo";
import {observer} from "mobx-react-lite";

const Account = (props) => {

  const store = useContext(StoreContext);

  const logout = () => {
    store.authRepo.logout().then(() => {
      console.log('logged out', !store.authRepo.authenticated);
    });
  };

  const menu = (
    <Menu className={'user-menu'} selectedKeys={[]}>
      <Menu.Item key="logout" onClick={logout}>
        <LogoutOutlined/>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>Profile</Button>
      </Dropdown>
    </div>

  )
};

export default observer(Account);

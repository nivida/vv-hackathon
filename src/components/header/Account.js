import {Avatar, Dropdown, Menu} from "antd";
import * as React from "react";
import avatar from "./../../assets/images/avatar.png";
import {LogoutOutlined} from "@ant-design/icons";

const Account = (props) => {

  const logout = () => {
    // TODO implement
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
    <Dropdown overlay={menu} trigger={['click']}>
      <Avatar
        size={"default"}
        className={'user-avatar'}
        alt="avatar"
        src={avatar}
      />
    </Dropdown>
  )
};

export default Account;

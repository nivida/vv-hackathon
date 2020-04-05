import {Button, Dropdown, Menu} from "antd";
import * as React from "react";
import {useContext} from "react";
import {LogoutOutlined} from "@ant-design/icons";
import {StoreContext} from "../../repositories/rootRepo";
import {observer} from "mobx-react-lite";
import SettingFilled from "@ant-design/icons/es/icons/SettingFilled";

const Account = (props) => {

  const store = useContext(StoreContext);

  const logout = () => {
    store.authRepo.logout().then(() => {
      console.log('logged out', !store.authRepo.authenticated);
    });
  };

  const menu = (
    <Menu className={'user-menu'} selectedKeys={[]}>
      <Menu.Item key="privacy">
        Privacy
      </Menu.Item>
      <Menu.Item key="feedback">
        Feedback
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          <SettingFilled />
        </Button>
      </Dropdown>
      <Button onClick={logout} style={{marginLeft: '10px'}}>
        <LogoutOutlined />
      </Button>
    </div>

  )
};

export default observer(Account);

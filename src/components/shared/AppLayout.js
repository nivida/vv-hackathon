import * as React from "react";
import {Layout} from "antd";
import Header from "../header/Header";

const AppLayout = ({children}) => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header/>
      {children}
    </Layout>
  )
};

export default AppLayout;

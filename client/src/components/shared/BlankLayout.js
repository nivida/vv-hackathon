import {Layout} from "antd";
import * as React from "react";

const BlankLayout = (props) => {
  return (
    <Layout className={'blank-layout'}>
      {props.children}
    </Layout>
  )
};

export default BlankLayout;

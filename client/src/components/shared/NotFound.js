import {PageHeader, Result} from "antd";
import React from "react";
import BlankLayout from "./BlankLayout";

const NotFound = (props) => {
  return (
    <BlankLayout>
      <PageHeader>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      </PageHeader>
    </BlankLayout>
  );
};

export default NotFound;

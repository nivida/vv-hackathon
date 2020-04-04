import * as React from "react";
import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const DeleteButton = ({onConfirm}) => {
  return (
    <Popconfirm title="Are you sure" okText="Yes" cancelText="No" onConfirm={onConfirm}>
      <Button type={'danger'} icon={<DeleteOutlined/>} style={{marginLeft: 10}}>Delete</Button>
    </Popconfirm>
  )
};

export default DeleteButton;

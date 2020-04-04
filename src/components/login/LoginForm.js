import * as React from "react";
import {Button, Col, Form, Input, Row} from "antd";
import {ValidationRules} from "../../utils/validationRules";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const LoginForm = ({onSubmit}) => {

  const handleSubmit = (values) => {
    onSubmit && onSubmit(values)
  };

  return (
    <Form onFinish={handleSubmit} className="login-form">
      <h1 style={{textAlign: 'center', marginBottom: 25}}>Open Education Server</h1>
      <Form.Item name={'email'} rules={[
        ValidationRules.email,
        {required: true, message: 'Please enter your email.'}]}>
        <Input size="large" prefix={<UserOutlined/>} type={'email'} placeholder="E-Mail"/>
      </Form.Item>
      <Form.Item name={'password'} rules={[{required: true, message: 'Please enter your password.'}]}>
        <Input size="large" prefix={<LockOutlined/>} type="password"
               placeholder="Password"/>
      </Form.Item>
      <Form.Item style={{marginBottom: 0}}>
        <Row type="flex" justify={'space-between'}>
          <Col>
            <Link to={'#'} disabled={true}>Forgot Password?</Link>
          </Col>
          <Col>
            <Button size={'large'} type="primary" htmlType="submit" className="login-form-button"
                    style={{minWidth: 120}}>
              Login
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
};

export default LoginForm;

import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Button, DatePicker, Form, Input, Modal, Select} from 'antd';

export default class RequestCallModal extends React.Component {
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
    },
  };

  tailLayout = {
    wrapperCol: {offset: 8, span: 16},
  };

  state = {
    confirmLoading: false,
  };

  handleSubmit = (values) => {
    this.props.onSubmit({
      ...values,
      assignments: values.assignments || [],
      users: values.users || []
    });
  };

  handleCancel = () => {
    this.props.onCancel && this.props.onCancel();
  };

  render() {
    const {confirmLoading} = this.state;
    return (
      <Observer>
        {
          () => {
            return (
              <div>
                <Modal
                  title={'Request Call'}
                  visible={true}
                  footer={null}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                  handleCancel={this.handleCancel}
                >
                  <Form
                    {...this.layout}
                    name="lesson"
                    onFinish={this.handleSubmit}
                    onFinishFailed={this.handleCancel}
                    initialValues={this.props.lesson}
                  >
                    <Form.Item
                      label="Subject"
                      name="subject"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the title of your lesson.',
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>

                    <Form.Item
                      label="Description"
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your lesson description.',
                        },
                      ]}
                    >
                      <Input.TextArea rows={4}> </Input.TextArea>
                    </Form.Item>
                    <Form.Item
                      label="Date & Time"
                      name="start"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the start date and time of your lesson.',
                        },
                      ]}
                    >
                      <DatePicker showTime={true}/>
                    </Form.Item>
                    <Form.Item
                      label="Students:"
                      name="users"
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                          <Select.Option key="fabian" value="fabian">Fabian</Select.Option>
                          <Select.Option key="fabian" value="fabian">Selina</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item {...this.tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            );
          }
        }
      </Observer>
    );
  }
}

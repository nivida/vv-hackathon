import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Button, Form, Input, Modal, Select} from 'antd';

export default class MaterialForm extends React.Component {
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
    this.props.onSubmit(values);
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
                  title={this.props.title}
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
                    initialValues={this.props.material || {type: 'file'} }
                  >
                    <Form.Item
                      label="Name:"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please define the name of your assignment.',
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      label="Type:"
                      name="type"
                      rules={[
                        {
                          required: true
                        },
                      ]}
                    >
                      <Select
                        style={{width: '100%'}}
                        placeholder="Please select the correct material type"
                      >
                          <Select.Option key="youtube" value="youtube">YouTube</Select.Option>
                          <Select.Option key="file" value="file">file</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="File-URL:"
                      name="url"
                      rules={[
                        {
                          message: 'Please define the file url of your material',
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      label="YouTube ID:"
                      name="videoId"
                      rules={[
                        {
                          message: 'Please define the YouTube video ID of your material.',
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item {...this.tailLayout}>
                      <Button type="primary" htmlType="submit">
                        {this.props.submitTitle}
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

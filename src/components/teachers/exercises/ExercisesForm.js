import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Button, Form, Input, Modal, Select} from 'antd';

export default class ExercisesForm extends React.Component {
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
                    initialValues={this.props.exercise || {type: 'sorting'} }
                  >
                    <Form.Item
                      label="Title:"
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please define the title of your exercise.',
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
                        placeholder="Please select the correct exercise type"
                      >
                          <Select.Option key="sorting" value="sorting">Sorting</Select.Option>
                          <Select.Option key="math" value="math">Math</Select.Option>
                          <Select.Option key="video-recording" value="video-recording">Video Recording</Select.Option>
                          <Select.Option key="audio-recording" value="audio-recording">Audio Recording</Select.Option>
                          <Select.Option key="select" value="select">Select</Select.Option>
                          <Select.Option key="text" value="text">Text</Select.Option>
                      </Select>
                    </Form.Item>
                    <span> SHOW CORRECT FORMS FOR EACH EXERCISE! </span>
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

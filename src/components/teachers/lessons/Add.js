import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Modal, Button, Form, Input, TimePicker, DatePicker, Select} from 'antd';
import moment from 'moment';
import {AssignmentRepo} from "../../../repositories/assignmentRepo";

const assignments = [];
for (let i = 10; i < 36; i++) {
  assignments.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
}

export default class Add extends React.Component {
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
    },
  };

  state = {
    assignments: [],
    ModalText: 'Content of the modal',
    ModalTitle: 'Add Lesson',
    visible: false,
    confirmLoading: false,
  };

  showModal = async () => {
    this.setState({
      visible: true,
      assignments: await new AssignmentRepo().getAll()
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {

  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  onStartTimeChange = () => {

  };

  onEndTimeChange = () => {

  };

  onAssignmentsChange = () => {

  };

  render() {
    const {visible, confirmLoading, ModalText, ModalTitle} = this.state;
    return (
      <Observer>
        {
          () => {
            return (
              <div>
                <Button type="primary" onClick={this.showModal}>
                  Open Modal with async logic
                </Button>
                <Modal
                  title={ModalTitle}
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                >
                  <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                  >
                    <Form.Item
                      label="Title"
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the title of your lesson.',
                        },
                      ]}
                    >
                      <Input />
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
                      label="Start"
                      name="start"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the starting date and time of your lesson.',
                        },
                      ]}
                    >
                      <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
                      <TimePicker onChange={this.onStartTimeChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Form.Item>

                    <Form.Item
                      label="End"
                      name="end"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the end date and time of your lesson.',
                        },
                      ]}
                    >
                      <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
                      <TimePicker onChange={this.onEndTimeChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Form.Item>

                    <Form.Item
                      label="Assignments:"
                      name="end"
                      rules={[
                        {
                          required: true,
                          message: 'Please select the assignments for this lesson.',
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        onChange={this.onAssignmentsChange}
                      >
                        {assignments}
                      </Select>
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

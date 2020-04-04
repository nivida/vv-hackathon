import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Modal, Button, Form, Input, TimePicker, DatePicker, Select} from 'antd';

export default class LessonForm extends React.Component {
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
    ModalTitle: 'Add Lesson',
    visible: false,
    confirmLoading: false,
  };

  showModal = async () => {
    this.setState({
      visible: true
    });
  };

  handleSubmit = (values) => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      visible: false,
    });

    this.props.onSubmit(values);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {visible, confirmLoading, ModalTitle} = this.state;
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
                  footer={null}
                  confirmLoading={confirmLoading}
                >
                  <Form
                    {...this.layout}
                    name="lesson"
                    onFinish={this.handleSubmit}
                    onFinishFailed={this.handleCancel}
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
                      label="Start"
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
                      label="End"
                      name="end"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the end date and time of your lesson.',
                        },
                      ]}
                    >
                      <DatePicker showTime={true}/>
                    </Form.Item>
                    <Form.Item
                      label="Assignments:"
                      name="assignments"
                      rules={[
                        {
                          required: true,
                          message: 'Please select the assignments for this lesson.',
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        {(this.props.assignments) ? this.props.assignments.map(assignment => (
                          <Select.Option key={assignment.id}
                                         value={assignment.id}>{assignment.content}</Select.Option>)) : null}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Students:"
                      name="users"
                      rules={[
                        {
                          required: true,
                          message: 'Please select the students for this lesson.',
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        <Select.Option value="Student1">Student1</Select.Option>
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

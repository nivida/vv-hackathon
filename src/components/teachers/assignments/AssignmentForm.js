import * as React from "react";
import {Observer} from 'mobx-react-lite';
import {Button, DatePicker, Form, Input, InputNumber, Modal, Select} from 'antd';

export default class AssignmentForm extends React.Component {
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
                    initialValues={this.props.assignment || {state: 'open'} }
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
                      label="Topic:"
                      name="topic"
                      rules={[
                        {
                          required: true
                        },
                      ]}
                    >
                      <Select
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                          <Select.Option key="math" value="Math">Math</Select.Option>
                          <Select.Option key="german" value="German">German</Select.Option>
                          <Select.Option key="english" value="English">English</Select.Option>
                          <Select.Option key="physics" value="Physics">Physics</Select.Option>
                          <Select.Option key="ethics" value="Ethics">Ethics</Select.Option>
                          <Select.Option key="ebw" value="EBW">EBW</Select.Option>
                          <Select.Option key="electronics" value="Electronics">Electronics</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="State:"
                      name="state"
                    >
                      <Select
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        <Select.Option key="review" value="review">Review</Select.Option>
                        <Select.Option key="open" value="open">Open</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Credits:"
                      name="credits"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the amount of credits this assignment gives.',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Submission Date:"
                      name="deadline"
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
                      label="Materials:"
                      name="materials"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        {(this.props.materials) ? this.props.materials.map(item => (
                          <Select.Option key={item.id}
                                         value={item.id}>{item.name}</Select.Option>)) : null}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Exercises:"
                      name="exercises"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        {(this.props.exercises) ? this.props.exercises.map(exercise => (
                          <Select.Option key={exercise.id}
                                         value={exercise.id}>{exercise.name}</Select.Option>)) : null}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Students:"
                      name="students"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                      >
                        {(this.props.students) ? this.props.students.map(student => (
                          <Select.Option key={student.id}
                                         value={student.id}>{student.name}</Select.Option>)) : null}
                      </Select>
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

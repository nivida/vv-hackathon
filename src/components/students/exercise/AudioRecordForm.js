import * as React from "react";
import {ReactMic} from "react-mic";
import "./AudioRecordForm.scss";
import {Button, Form} from "antd";
import SubmittableExercise from "./shared/SubmittableExercise";
import {AudioOutlined} from "@ant-design/icons";

export default class AudioRecordForm extends React.Component {
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
    },
  };

  tailLayout = {
    // wrapperCol: {offset: 8, span: 16},
  };

  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      canSubmit: false,
    }
  }

  start = () => {
    this.setState({
      record: true
    });
  };

  handleSubmit() {
    this.setState({
      record: false,
      canSubmit: true
    });
  }

  render() {
    return (
      <SubmittableExercise exercise={this.props.exercise} button={this.state.canSubmit && !this.state.record}>
        <Form
          {...this.layout}
          name="audio-recording"
          onFinish={this.handleSubmit.bind(this)}
        >
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.props.onStop}
            onData={this.props.onData}
            strokeColor="#5901b8"
            backgroundColor="#f0f2f5"/>
          <Form.Item {...this.tailLayout}>
            <Button icon={<AudioOutlined/>} disabled={this.state.record} type="primary" onClick={this.start}
                    style={{margin: '10px 8px 0 0'}}>
              Start
            </Button>
            <Button type={this.state.record ? 'primary' : 'default'} htmlType="submit" style={{margin: '10px 0 0 0'}}>
              Stop
            </Button>
          </Form.Item>
        </Form>
      </SubmittableExercise>
    );
  }
}

import * as React from "react";
import {ReactMic} from "react-mic";
import "./AudioRecordForm.scss";
import {Card, Button, Form} from "antd";

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
    wrapperCol: {offset: 8, span: 16},
  };

  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }

  start = () => {
    this.setState({
      record: true
    });
  };

  handleSubmit() {
    this.setState({
      record: false
    });
  }

  render() {
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Audio Recording" bordered={false}>
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
              strokeColor="#fff"
              backgroundColor="#049372"/>
            <Form.Item {...this.tailLayout}>
              <Button type="primary" onClick={this.start} style={{margin: '10px 8px 0 0'}}>
                Start
              </Button>
              <Button type="primary" htmlType="submit" style={{ margin: '10px 0 0 0' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
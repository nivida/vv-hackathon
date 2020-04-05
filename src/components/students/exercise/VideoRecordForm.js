import * as React from "react";
import {useEffect, useRef} from "react";
import "./AudioRecordForm.scss";
import {Button, Form} from "antd";
import "./VideoRecordForm.scss";
import {ReactMediaRecorder} from "react-media-recorder";
import PlayCircleOutlined from "@ant-design/icons/es/icons/PlayCircleOutlined";
import PauseCircleOutlined from "@ant-design/icons/es/icons/PauseCircleOutlined";
import SubmittableExercise from "./shared/SubmittableExercise";

const VideoPreview = ({stream, controls = true}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }

  return <video ref={videoRef} controls={controls} autoPlay muted className="video-container"/>;
};

export default class VideoRecordForm extends React.Component {
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
    },
  };

  tailLayout = {
    wrapperCol: {offset: 20, span: 8},
  };

  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      canSubmit: false
    }
  }

  start = () => {
    this.setState({
      record: true
    });
  };

  stop() {
    this.setState({
      record: false,
      canSubmit: true
    });
  }

  handleSubmit() {

  }

  render() {
    return (
      <SubmittableExercise exercise={this.props.exercise} button={this.state.canSubmit && !this.state.record}>
        <Form
          {...this.layout}
          name="video-recording"
          onFinish={this.handleSubmit.bind(this)}
        >
          <ReactMediaRecorder
            video
            render={({startRecording, stopRecording, mediaBlobUrl, previewStream, status}) => (
              <div className="video-wrapper">
                {(status === 'stopped') ? <video src={mediaBlobUrl} controls autoPlay className="video-container"/> :
                  <VideoPreview stream={previewStream} controls={false}/>}
                <Button type="primary" shape="circle" disabled={this.state.record} onClick={() => {
                  startRecording();
                  this.start()
                }} style={{margin: '10px 8px 0 0', height: '36px', width: '36px'}}>
                  <PlayCircleOutlined className="play-button"/>
                </Button>
                <Button type="primary" shape="circle" disabled={!this.state.record} onClick={() => {
                  stopRecording();
                  this.stop()
                }} htmlType="submit" style={{margin: '10px 8px 0 0', height: '36px', width: '36px'}}>
                  <PauseCircleOutlined className="stop-button"/>
                </Button>
              </div>
            )}
          />
          {/*<Form.Item {...this.tailLayout}>*/}
          {/*  <Button type="primary" htmlType="submit" style={{margin: '10px 0 0 0'}}>*/}
          {/*    Submit*/}
          {/*  </Button>*/}
          {/*</Form.Item>*/}
        </Form>
      </SubmittableExercise>
    );
  }
}

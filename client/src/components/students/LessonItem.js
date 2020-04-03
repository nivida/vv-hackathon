import * as React from "react";
import {useState} from "react";
import {Button, Card, Col, Row} from "antd";
import LessonDetails from "./LessonDetails";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const LessonItem = ({lesson, ...props}) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Card title={false} bordered={false} bodyStyle={{padding: 25, paddingBottom: 5}}>
      <Row justify={'space-between'} type={'flex'}>
        <Col>
          <p style={{fontWeight: 'bold', margin: 0}}>{'09:00 - 10:00'}</p>
          <h3 style={{margin: 0}}>{lesson.name}</h3>
        </Col>
        {expanded ? (
          <Col span={24}>
            <LessonDetails style={{marginTop: 20}} lesson={lesson}/>
          </Col>
        ) : null}
        <Col span={24}>
          <Row justify={'center'} type={'flex'}>
            <Button onClick={() => setExpanded(expanded => !expanded)} type={'link'}>
              {expanded ? (
                <><UpOutlined/> Less</>
              ) : (
                <><DownOutlined/> Details</>
              )}
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  )
};

export default LessonItem;

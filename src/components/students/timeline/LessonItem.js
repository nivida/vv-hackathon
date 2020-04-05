import * as React from "react";
import {useState} from "react";
import {Button, Col, Row, Tag} from "antd";
import LessonDetails from "./LessonDetails";
import {DownOutlined, UpOutlined} from "@ant-design/icons";
import moment from "moment";
import {timeFormat} from "../../../utils/dateFormats";

const LessonItem = ({lesson, ...props}) => {

  const [expanded, setExpanded] = useState(false);

  return (
    // <Card title={false} bordered={false} bodyStyle={{padding: 25, paddingBottom: 5}}>
    <Row justify={'space-between'} type={'flex'}>
      <Col>
        <p style={{
          fontWeight: 'bold',
          margin: 0,
          fontSize: 14
        }}>{`${moment.unix(lesson.start / 1000).format(timeFormat)} - ${moment.unix(lesson.end / 1000).format(timeFormat)}`}</p>
        <h2 style={{margin: 0}}>{lesson.title}</h2>
      </Col>
      <Col>
        {lesson.tags ? (
          lesson.tags.map((tag, i) => (
            <Tag key={tag} color={["purple", "magenta", "green"][i]}>{tag}</Tag>
          ))
        ) : null}
      </Col>
      {expanded ? (
        <Col span={24}>
          <LessonDetails style={{marginTop: 20}} lesson={lesson}/>
        </Col>
      ) : null}
      <Col span={24}>
        <Row justify={'center'} type={'flex'}>
          <Button onClick={() => setExpanded(expanded => !expanded)} type={'link'}
                  style={{marginTop: expanded ? 20 : 0}}>
            {expanded ? (
              <><UpOutlined/> Less</>
            ) : (
              <><DownOutlined/> Details</>
            )}
          </Button>
        </Row>
      </Col>
    </Row>
    // </Card>
  )
};

export default LessonItem;

import * as React from "react";
import "./Dashboard.scss";
import {Row, Statistic, Col, Card, Calendar, Typography, Badge} from "antd";
import ArrowUpOutlined from "@ant-design/icons/es/icons/ArrowUpOutlined";
import ArrowDownOutlined from "@ant-design/icons/es/icons/ArrowDownOutlined";
import TeacherComments from "./TeacherComments";


function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {type: 'success', content: 'Lesson: Physics'},
        {type: 'success', content: 'Lesson: Music'},
        {type: 'success', content: 'Lesson: English'},
      ];
      break;
    case 10:
      listData = [
        {type: 'success', content: 'Lesson: Math'},
        {type: 'success', content: 'Lesson: Math'},
        {type: 'success', content: 'Lesson: Ethics'},
        {type: 'success', content: 'Lesson: German'},
        {type: 'warning', content: 'Exam: Religion'},
      ];
      break;
    case 7:
      listData = [
        {type: 'success', content: 'Lesson: Math'},
        {type: 'success', content: 'Lesson: Math'},
        {type: 'success', content: 'Lesson: Ethics'},
        {type: 'success', content: 'Lesson: German'},
        {type: 'warning', content: 'Exam: Religion'},
      ];
      break;
    case 6:
      listData = [
        {type: 'success', content: 'Lesson: Physics'},
        {type: 'success', content: 'Lesson: Music'},
        {type: 'success', content: 'Lesson: English'},
      ];
      break;
    case 15:
      listData = [
        {type: 'error', content: 'Call: Next half year'},
        {type: 'success', content: 'Lesson: Math'},
        {type: 'success', content: 'Lesson: Physics'},
      ];
      break;
    case 13:
      listData = [
        {type: 'success', content: 'Lesson: German'},
        {type: 'success', content: 'Lesson: Ethics'},
        {type: 'success', content: 'Lesson: English'},
      ];
      break;
    case 14:
      listData = [
        {type: 'success', content: 'Lesson: Physics'},
        {type: 'success', content: 'Lesson: Ethics'},
        {type: 'success', content: 'Lesson: Math'}
      ];
      break;
    case 16:
      listData = [
        {type: 'error', content: 'Call: Guitar Teacher'},
        {type: 'success', content: 'Lesson: Religion'},
        {type: 'success', content: 'Lesson: Physics'}
      ];
      break;
    case 17:
      listData = [
        {type: 'success', content: 'Lesson: Religion'},
        {type: 'success', content: 'Lesson: Physics'},
        {type: 'success', content: 'Lesson: German'},
        {type: 'success', content: 'Lesson: Arts'}
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content}/>
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const Student = (props) => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Collected credits this week (59)"
              value={8.28}
              precision={2}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Hours this week (29h)"
              value={9.3}
              precision={2}
              valueStyle={{color: '#cf1322'}}
              prefix={<ArrowDownOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: '20px'}}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Asked for help this week (3)"
              value={3.9}
              precision={2}
              valueStyle={{color: '#cf1322'}}
              prefix={<ArrowDownOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Average grade (4.25)"
              value={1.32}
              precision={2}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <TeacherComments/>
      <Card style={{marginTop: '50px'}}>
        <Typography.Title level={4}>Overview</Typography.Title>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
      </Card>
    </div>
  )
};

export default Student;

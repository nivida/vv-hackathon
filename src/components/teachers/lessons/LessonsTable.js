import * as React from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import {Button, Col, Input, Row, Table} from "antd";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import DeleteButton from "../../shared/DeleteButton";
import {LessonRepository} from "../../../repositories/lessonRepository";
import LessonForm from "./LessonForm";
import Add from "./Add";
import Edit from "./Edit";

const LessonsTable = (props) => {
  const repo = new LessonRepository();
  // repo.getLessonsByTeacher();

  const lessons = [
    {
      id: '1',
      name: 'Lesson 1',
      startsAt: '2020-05-01',
      endsAt: '2020-05-01',
    },
    {
      id: '2',
      name: 'Lesson 2',
      startsAt: '2020-05-01',
      endsAt: '2020-05-01',
    },
    {
      id: '3',
      name: 'Lesson 3',
      startsAt: '2020-05-01',
      endsAt: '2020-05-01',
    },
  ];

  const onDelete = (lesson) => {
    // TODO implement
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, lesson) => <Link to={`/lessons/${lesson.id}`}>{text}</Link>,
    },
    {
      title: 'Time',
      dataIndex: 'startsAt',
      render: (text, lesson) => `${moment(lesson.startsAt).format(datetimeFormat)} - ${moment(lesson.endsAt).format(datetimeFormat)}`,
    },
    {
      title: '',
      align: 'right',
      key: '',
      render: (text, record) => (
        <div>
          <Edit />
          <DeleteButton onConfirm={onDelete}/>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row type={'flex'} justify={'space-between'}>
        <Col>
          <Add />
        </Col>
        <Col>
          <Input.Search
            placeholder="search.."
            onSearch={value => console.log(value)}
            style={{width: 200}}
          />
        </Col>
      </Row>
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={lessons} bordered={false}/>
    </div>
  );
};

export default observer(LessonsTable);

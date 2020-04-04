import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import {Col, Input, Row, Table} from "antd";
import DeleteButton from "../../shared/DeleteButton";
import Add from "./Add";
import Edit from "./Edit";
import {StoreContext} from "../../../repositories/rootRepo";

const LessonsTable = (props) => {
  const store = useContext(StoreContext);
  const [lessons, setLessons] = useState(null);

  const loadData = () => store.lessonRepository.getLessonsByTeacher(store.authRepo.user.uid).then(setLessons);

  useEffect(() => {
    loadData();
  }, []);

  const onDelete = (lesson) => {
    // TODO implement
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, lesson) => <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>,
    },
    {
      title: 'Time',
      dataIndex: 'startsAt',
      render: (text, lesson) => `${moment(lesson.start).format(datetimeFormat)} - ${moment(lesson.end).format(datetimeFormat)}`,
    },
    {
      title: '',
      align: 'right',
      key: '',
      render: (text, lesson) => (
        <div>
          <Edit lesson={lesson.id} onEditSuccess={loadData}/>
          <DeleteButton onConfirm={() => {
            store.lessonRepository.delete(lesson.id).then(loadData)
          }}/>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row type={'flex'} justify={'space-between'}>
        <Col>
          <Add onAddSuccess={loadData}/>
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

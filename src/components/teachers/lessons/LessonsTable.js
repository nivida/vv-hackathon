import * as React from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import {Col, Input, Row, Table} from "antd";
import DeleteButton from "../../shared/DeleteButton";
import Add from "./Add";
import Edit from "./Edit";
import {useContext} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {useState} from "react";
import {useEffect} from "react";

const LessonsTable = (props) => {
  const store = useContext(StoreContext);
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
      store.lessonRepository.getLessonsByTeacher(store.authRepo.user.uid).then(setLessons);
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
          <Edit lesson={lesson.id}/>
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

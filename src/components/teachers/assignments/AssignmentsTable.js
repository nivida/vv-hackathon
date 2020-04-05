import * as React from "react";
import {observer} from "mobx-react-lite";
import {Button, Col, Input, Row, Table, Tag} from "antd";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import DeleteButton from "../../shared/DeleteButton";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {useState} from "react";
import {useEffect} from "react";
import AssignmentForm from "./AssignmentForm.js";

const AssignmentsTable = (props) => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getByAuthor(store.authRepo.user.uid).then(setAssignments);
  }, []);

  const onDelete = (assignment) => {
    // TODO implement
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, assignment) => <Link to={`/assignments/${assignment.id}`}>{text}</Link>,
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      render: text => moment(text).format(datetimeFormat),
    },
    {
      title: 'Topic',
      key: 'topic',
      dataIndex: 'topic',
      render: topic => (
        <span>
            <Tag color="geekblue" key={topic}>
              {topic.toUpperCase()}
            </Tag>
        </span>
      ),
    },
    {
      title: 'State',
      key: 'state',
      dataIndex: 'state',
      render: state => (
        <span>
          {state}
        </span>
      ),
    },
    {
      title: '',
      align: 'right',
      key: '',
      render: (text, record) => (
        <div>
          <Button icon={<EditOutlined/>}>Edit</Button>
          <DeleteButton onConfirm={onDelete}/>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row type={'flex'} justify={'space-between'}>
        <Col>
          <Button type={'primary'} icon={<PlusOutlined/>}>Add</Button>
        </Col>
        <Col>
          <Input.Search
            placeholder="search.."
            onSearch={value => console.log(value)}
            style={{width: 200}}
          />
        </Col>
      </Row>
      <AssignmentForm title="Add" />
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={assignments} bordered={false}/>
    </div>
  );
};

export default observer(AssignmentsTable);

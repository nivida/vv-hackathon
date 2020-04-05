import * as React from "react";
import {observer} from "mobx-react-lite";
import {Col, Input, Row, Table, Tag} from "antd";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import DeleteButton from "../../shared/DeleteButton";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {useState} from "react";
import {useEffect} from "react";
import Add from "./Add";
import Edit from "./Edit";

const AssignmentsTable = (props) => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);

  const loadData = () => {store.assignmentRepo.getByAuthor(store.authRepo.user.uid).then(setAssignments);};

  useEffect(() => {
    loadData();
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
      render: (text, assignment) => (
        <div>
          <Edit assignment={assignment.id} onEditSuccess={loadData}/>
          <DeleteButton onConfirm={() => {
            store.assignmentRepo.delete(assignment.id).then(loadData)
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
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={assignments} bordered={false}/>
    </div>
  );
};

export default observer(AssignmentsTable);

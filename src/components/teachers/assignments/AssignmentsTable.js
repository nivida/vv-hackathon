import * as React from "react";
import {observer} from "mobx-react-lite";
import {Button, Col, Input, Row, Table, Tag} from "antd";
import moment from "moment";
import {datetimeFormat} from "../../../utils/dateFormats";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import DeleteButton from "../../shared/DeleteButton";
import {Link} from "react-router-dom";

const AssignmentsTable = (props) => {

  const assignments = [
    {
      id: '1',
      name: 'Ass 1',
      deadline: '2020-05-01',
      tags: ['math', 'math-100'],
    },
    {
      id: '2',
      name: 'Ass 2',
      deadline: '2020-05-01',
      tags: ['history'],
    },
    {
      id: '3',
      name: 'Ass 3',
      deadline: '2020-05-01',
      tags: ['arts'],
    },
  ];

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
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
        {tags.map(tag => {
          const color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
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
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={assignments} bordered={false}/>
    </div>
  );
};

export default observer(AssignmentsTable);

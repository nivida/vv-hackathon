import * as React from "react";
import {observer} from "mobx-react-lite";
import {Col, Input, Row, Table} from "antd";
import DeleteButton from "../../shared/DeleteButton";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from "../../../repositories/rootRepo";
import {useState} from "react";
import {useEffect} from "react";
import Add from "./Add";
import Edit from "./Edit";

const ExercisesTable = (props) => {
  const store = useContext(StoreContext);
  const [exercises, setExercises] = useState(null);

  const loadData = () => {store.exerciseRepo.getAll().then(setExercises);};

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, exercise) => <Link to={`/exercises/${exercise.id}`}>{(exercise.title) ? exercise.title : exercise.question}</Link>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: text => (
        <span>{text}</span>
      ),
    },
    {
      title: '',
      align: 'right',
      key: '',
      render: (text, exercise) => (
        <div>
          <Edit material={exercise.id} onEditSuccess={loadData}/>
          <DeleteButton onConfirm={() => {
            store.exerciseRepo.delete(exercise.id).then(loadData)
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
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={exercises} bordered={false}/>
    </div>
  );
};

export default observer(ExercisesTable);

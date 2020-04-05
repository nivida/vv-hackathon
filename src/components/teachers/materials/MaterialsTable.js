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

const MaterialsTable = (props) => {
  const store = useContext(StoreContext);
  const [materials, setMaterials] = useState(null);

  const loadData = () => {store.materialRepo.getAll().then(setMaterials);};

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, material) => <Link to={`/materials/${material.id}`}>{text}</Link>,
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
      render: (text, material) => (
        <div>
          <Edit material={material.id} onEditSuccess={loadData}/>
          <DeleteButton onConfirm={() => {
            store.materialRepo.delete(material.id).then(loadData)
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
      <Table style={{marginTop: 10}} columns={columns} rowKey={'id'} dataSource={materials} bordered={false}/>
    </div>
  );
};

export default observer(MaterialsTable);

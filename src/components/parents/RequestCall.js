import {observer} from "mobx-react-lite";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {Button, message, Tooltip} from "antd";
import RequestCallModal from "./RequestCallModal";
import PhoneOutlined from "@ant-design/icons/es/icons/PhoneOutlined";
import {StoreContext} from "../../repositories/rootRepo";

const RequestCall = ({onAddSuccess}) => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (isVisible) {
      store.assignmentRepo.getAll().then(setAssignments);
      store.userRepo.getUsersByRole('student').then(setStudents);
    }
  }, [isVisible]);

  const handleSubmit = (values) => {
    values.start = values.start.toDate().getTime();
    values.end = values.end.toDate().getTime();
    values.teacher = store.authRepo.user.uid;
    store.lessonRepository.create(values).then((res) => {
      setIsVisible(false);
      message.success('successfully added lesson!');
      onAddSuccess && onAddSuccess(res);
    });
  };

  return (
    <div>
      <div style={{float: 'right', marginTop: '-5px'}}>
        <Tooltip title="Request Call">
          <Button type="primary" shape="circle" icon={<PhoneOutlined />} size="large" onClick={() => setIsVisible(true)}/>
        </Tooltip>
      </div>
      {isVisible ? <RequestCallModal
                               onCancel={() => setIsVisible(false)}
                               onSubmit={handleSubmit}
                               assignments={assignments}
                               students={students}/> : null}
    </div>
  )
};

export default observer(RequestCall);

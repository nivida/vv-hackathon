import * as React from "react";
import {useContext} from "react";
import {UserTypes} from "./models/user";
import StudentApp from "./StudentApp";
import TeacherApp from "./TeacherApp";
import {StoreContext} from "./repositories/rootRepo";
import {observer} from "mobx-react-lite";
import {Layout, Spin} from "antd";
import ParentApp from "./ParentApp";

const ProtectedApp = (props) => {
  const store = useContext(StoreContext);

  const userRole = store.authRepo.user.role;

  if (!userRole) return (
    <Layout style={{minHeight: '100vh'}}>
      <Spin style={{marginTop: 100}} size={'large'}/>
    </Layout>
  );

  console.log({userRole});

  if (userRole === UserTypes.student) {
    return <StudentApp/>
  }

  if (userRole === UserTypes.teacher) {
    return <TeacherApp/>
  }

  if (userRole === UserTypes.parent) {
    return <ParentApp/>
  }

  return <p>unknown user role</p>;
};

export default observer(ProtectedApp);

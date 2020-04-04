import * as React from "react";
import {useContext} from "react";
import {UserTypes} from "./models/user";
import StudentApp from "./StudentApp";
import TeacherApp from "./TeacherApp";
import {StoreContext} from "./repositories/rootRepo";
import {observer} from "mobx-react-lite";
import {Layout, Spin} from "antd";

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

  return <p>unknown user role</p>;
};

export default observer(ProtectedApp);

import * as React from "react";
import {observer} from "mobx-react-lite";
import {Empty} from "antd";

const ExerciseSmall = (props) => {
  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No exercise'}/>;
};

export default observer(ExerciseSmall);

import * as React from "react";
import File from "./material/File";

const Material = ({material}) => {
  if (material.type === 'file') {
    return <File material={material}/>;
  }

  return <p>{material.type}</p>
};

export default Material;

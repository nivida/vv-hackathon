import * as React from "react";
import File from "./material/File";
import Youtube from "./material/Youtube";

const Material = ({material}) => {
  if (material.type === 'file') {
    return <File material={material}/>;
  }

  if (material.type === 'youtube') {
    return <Youtube material={material}/>;
  }

  return <p>{material.type}</p>
};

export default Material;

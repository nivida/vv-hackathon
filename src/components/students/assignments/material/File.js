import * as React from "react";
import {FilePdfOutlined, LinkOutlined} from "@ant-design/icons";

const File = ({material}) => {
  return (
    <div>
      <a href={material.url} target={'_blank'} rel="noopener noreferrer">
        {material.fileType === 'pdf' ? <FilePdfOutlined style={{marginRight: 5}}/> :
          <LinkOutlined style={{marginRight: 5}}/>}
        {material.name}
      </a>
    </div>
  )
};

export default File;

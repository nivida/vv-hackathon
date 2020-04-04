import * as React from "react";

const Content = ({children, type = 'default'}) => {

  let style = {padding: '20px 20%'};

  if (type === 'wide') {
    style = {padding: '20px 10%'};
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
};

export default Content;

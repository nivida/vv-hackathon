import {Button} from "antd";
import React from "react";
import {withRouter} from "react-router";

const handleClick = (href, history) => {
    history.push(href);
};

const ButtonLink = ({href, children, history, location, match, staticContext, ...rest}) => {

    return <Button onClick={() => handleClick(href, history)} {...rest}>{children}</Button>
};

export default withRouter(ButtonLink);

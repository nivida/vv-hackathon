import {Result} from "antd";
import React from "react";
import ButtonLink from "./ButtonLink";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <Result
                status={"500"}
                title={"500"}
                subTitle={"Sorry, something went wrong."}
                extra={<ButtonLink href={'/'}>Home</ButtonLink>}
            />
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

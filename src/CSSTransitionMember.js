import React from "react";
import ReactDOM from "react-dom";
import SessionTree from "./SessionTree";

type Props = {
    time: number,
    name: string,
    session: string
};

class CSSTransition extends React.Component<*,Props > {
    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this);
        //register element in session database
        SessionTree.set(this.dom, this.props);
    }
    componentWillUpdate() {
        //remove old elements from session database
        SessionTree.set(this.dom, this.props);
    }
    render() {
        const {
            tagName: Tag = "span",
            className,
            children, name
        } = this.props;
        // set animation-start class for animation
        return <Tag
            className={`${className} ${name}-start`}
            id={SessionTree.id}
        >
            {
                children
            }
        </Tag>;
    }
}
export default CSSTransition;
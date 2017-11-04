// @flow
import React from "react";
import SessionTree from "./SessionTree";
import ReactDOM from "react-dom";

type Props = {
    time: number,
    name: string,
    session: string
};

export default class CSSTransitionSession extends React.Component<*,Props > {
    
    componentDidMount(){
        this.dom = ReactDOM.findDOMNode(this);
        //remove old elements from session database
        SessionTree.reset(this);
    }
    
    componentWillUpdate() {
        this.dom = ReactDOM.findDOMNode(this);
        //remove old elements from session database
        SessionTree.reset(this);
    }
    componentDidUpdate() {
        // play sesion animations
        SessionTree.play(this.props);
    }
    render() {
        const { tagName: Tag = "span", className, children } = this.props;
        return <Tag
            className={className}
            id={SessionTree.id}
        >
            {
                children
            }
        </Tag>;
    }

}
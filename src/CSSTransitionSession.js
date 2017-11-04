// @flow
import React from "react";
import SessionTree from "./SessionTree";

type Props = {
    time: number,
    name: string,
    session: string
};

export default class CSSTransitionSession extends React.Component<*,Props > {
    componentWillUpdate() {
        //remove old elements from session database
        SessionTree.clear(this.props);
    }
    componentDidUpdate() {
        // play sesion animations
        SessionTree.play(this.props);
    }
    render() {
        const { tagName: Tag = "span", className, children } = this.props;
        return <Tag
            className={className}
            id={SessionTree.id + "CONTAINER"}
        >
            {
                children
            }
        </Tag>;
    }

}
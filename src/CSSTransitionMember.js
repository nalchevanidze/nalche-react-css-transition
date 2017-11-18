import React from "react";
import ReactDOM from "react-dom";
import SessionTree from "./SessionTree";

type Props = {
    time: number,
    name: string,
    session: string
};

const styleGenerator = (
    duration = 0,
    delay = 0
) => ({
    transitionDuration: (duration * 1000) + "ms",
    transitionDelay: (delay * 1000) + "ms"
});

import findParentNode from "./SessionTree/findParentNode";

const defaultStyle = styleGenerator();

class CSSTransition extends React.Component<*, Props> {

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this);
        this.transitionParentNode = findParentNode(this.dom);
        //register element in session database
        SessionTree.set(this);
    }

    setStyle(style) {
        Object.assign(
            this.dom.style,
            style
        );
    }

    componentWillUpdate() {
        //remove old elements from session database
        this.dom.className = this.generateClassName("start");
        this.setStyle(defaultStyle);
        SessionTree.set(this);
    }
    generateClassName(mode) {
        return [
            this.props.className,
            this.props.name + "-" + mode
        ].filter(e => !!e).join(" ");
    }
    setTransitionAt(delay) {
        this.setStyle(
            styleGenerator( this.props.time, delay )
        );
        this.dom.className = this.generateClassName("end");
    }
    render() {
        const {
            tagName: Tag = "div",
            children,
            style
        } = this.props;
        // set animation-start class for animation
        let mainstyle = style ?
            {
                ...defaultStyle,
                ...style
            }
            :
            defaultStyle
            ;

        return <Tag
            className={this.generateClassName("start")}
            id={SessionTree.id}
            style={mainstyle}
        >
            {
                children
            }
        </Tag>;
    }
}
export default CSSTransition;
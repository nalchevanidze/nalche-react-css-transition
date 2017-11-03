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

const defaultStyle = styleGenerator();

class CSSTransition extends React.Component<*, Props> {

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this);
        //register element in session database
        SessionTree.set(this.dom, this.props, this);
    }
    componentWillUpdate() {
        //remove old elements from session database
        SessionTree.set(this.dom, this.props, this);
    }

    generateClassName(mode) {
        return [
            this.props.className,
            this.props.name + "-" + mode
        ].filter(e => !!e).join(" ");
    }

    setTransitionAt(delay) {

        Object.assign(
            this.dom.style,
            styleGenerator(
                //duration
                this.props.time,
                delay
            )
        );

        this.dom.className = this.generateClassName("end");

    }

    render() {
        const {
            tagName: Tag = "span",
            children
        } = this.props;
        // set animation-start class for animation
        return <Tag
            className={this.generateClassName("start")}
            id={SessionTree.id}
            style={defaultStyle}
        >
            {
                children
            }
        </Tag>;
    }
}
export default CSSTransition;
import * as React from "react";
import * as ReactDOM from "react-dom";
import SessionTree from "./SessionTree";
const session = new SessionTree();

interface CSSTransitionMemberProps  {
    name: string;
    session: string;
    time?: number;
    tagName?: string, 
    className?: string, 
    style?: any,
    children?: any;
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

export class CSSTransitionMember extends React.Component< {} , CSSTransitionMemberProps > {
    dom: any;
    parent: any;
    props: CSSTransitionMemberProps;

    public componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this);
        this.parent = findParentNode( session.id , this.dom);
        session.addMember(this);
    }

    private setStyle(style) {
        Object.assign( this.dom.style,  style );
    }

    public componentWillUpdate() {
        this.dom.className = this.generateClassName("start");
        this.setStyle(defaultStyle);
        session.addMember(this);
    }

    public generateClassName = (mode) => {
        const { className, name } = this.props;
        return [className, name + "-" + mode].filter(e => !!e ).join(" ");
    }

    public setTransitionAt = (delay: number): void => {
        this.setStyle(
            styleGenerator( this.props.time, delay )
        );
        this.dom.className = this.generateClassName("end");
    }
    
    public render() {
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
            id={session.id}
            style={mainstyle}
        >
            {
                children
            }
        </Tag>;
    }
}

interface CSSTransitionSessionProps {
    name: string;
    session: string;
    tagName: string, 
    className: string, 
    children: any
};

export class CSSTransitionSession extends React.Component<{}, CSSTransitionSessionProps > {
    props: CSSTransitionSessionProps;
    public componentDidMount(){
        session.play();       
    }
    public componentDidUpdate() {
        session.play();
    }
    public render() {
        session.reset();
        const { tagName: Tag = "div", className, children } = this.props;
        return <Tag
            className={className}
            id={session.id}
        >
            {
                children
            }
        </Tag>;
    }
}
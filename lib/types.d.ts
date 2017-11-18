import * as React from "react";
import { ComponentClass, ReactElement } from "react";

export interface CSSTransitionMemberProps {
    name:string,
    time:number,
    tagName?: string,
    className?:string,
    offset:number,
    inner?:number,
    style?:{}
}

export class CSSTransitionMember extends React.Component<CSSTransitionMemberProps, {}> { }

export interface CSSTransitionSessionProps {
    tagName?: string,
    className?:string,
    style?:{}
}

export class CSSTransitionSession extends React.Component<CSSTransitionSessionProps, {}> { }
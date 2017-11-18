import React from "react";
import { CSSTransitionMember } from "../dist";

const PersonalSample = () =>
    <CSSTransitionMember
        tagName="li"
        name="post-anim"
        time={0.3}
        offset={0.2}
    >
        <CSSTransitionMember
            tagName="div"
            name="post-anim"
            time={0.3}
            offset={0.2}
        >
            <h2>label</h2>
        </CSSTransitionMember>
        <CSSTransitionMember
            tagName="div"
            name="post-anim"
            time={0.6}
            offset={0.8}
        >
            <p>titel</p>
        </CSSTransitionMember>
    </CSSTransitionMember>;

const PersonalInfo = () =>
    <CSSTransitionMember
        tagName="ul"
        time={0.5}
        offset={0.5}
        name="post-anim"
        className="personal-info"
    >
        {
            [0,0,0,0].map((e, i) => <PersonalSample key={i} />)
        }
    </CSSTransitionMember>;

export default PersonalInfo;
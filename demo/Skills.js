import React from "react";
import { CSSTransitionMember } from "../index";
import Icon from "./Icon";

const SkillSingle = () =>
    <CSSTransitionMember
        tagName="div"
        name={"logolines"}
        session="diagram"
        time={0.5}
        offset={0.25}
        className="s-list"
    >
        <Icon />
        <p>balaafasgds</p>
    </CSSTransitionMember>
    ;

export default () => (
    <CSSTransitionMember
        tagName="section"
        name="scale-anim"
        time={0.6}
        offset={0.6}
        inner={0.4}
    >
        <p> bla bla </p>
        <ul>
            {
                [0, 0, 0, 0].map((e, i) =>
                    <li key={i} >
                        <SkillSingle />
                    </li>
                )
            }
        </ul>
    </CSSTransitionMember >
);
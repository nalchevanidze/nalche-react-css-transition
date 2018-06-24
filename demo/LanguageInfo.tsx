import * as React from 'react';
import { CSSTransitionMember } from "../dist";
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

const Skill =  () => (
    <CSSTransitionMember
        tagName="section"
        name="scale-anim"
        time={0.6}
        offset={0.6}
        inner={0.4}
    >
        <p> bla bla </p>
        <div>
            {
                [0, 0, 0, 0].map((e, i) =>
                    <div key={i} >
                        <SkillSingle />
                    </div>
                )
            }
        </div>
    </CSSTransitionMember >
);

const LanguageInfo = () =>
    <CSSTransitionMember
        tagName="section"
        name="post-anim"
        time={0.6}
        offset={0.6}
        style={{
            color:"blue"
        }}
    >
        <div
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}
        >
            {
                [0, 0, 0].map((e, i) =>
                    <Skill key={i} />
                )
            }
        </div>
    </CSSTransitionMember>;

export default LanguageInfo;
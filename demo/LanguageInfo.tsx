import * as React from 'react';
import Skill from "./Skills";
import { CSSTransitionMember } from "../dist";

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
                    <Skill id={"default"} level={Math.random() * 100} name={"name"} key={i} />
                )
            }
        </div>
    </CSSTransitionMember>;

export default LanguageInfo;
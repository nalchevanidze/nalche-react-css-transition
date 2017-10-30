import React from "react";
import Skill from "./Skills";
import { CSSTransitionMember } from "../index";


const LanguageInfo = () =>
    <CSSTransitionMember
        tagName="section"
        name="post-anim"
        time={0.6}
        offset={0.6}
    >
        <div className="lang" >
            {
                [0, 0, 0].map((e, i) =>
                    <Skill id={"default"} level={Math.random() * 100} name={"name"} key={i} />
                )
            }
        </div>
    </CSSTransitionMember>;

export default LanguageInfo;
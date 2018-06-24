import * as React from 'react';
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LanguageInfo from "./LanguageInfo";
import IconLogo from "./Icon";
import { CSSTransitionSession, CSSTransitionMember } from "../dist";

export default class Main extends React.Component<any,any> {
    render() {
        return (
            <div className='home page' >
                <CSSTransitionSession tagName="div" >
                    <div className="pic">
                        <CSSTransitionMember
                            tagName="div"
                            name="logolines"
                            time={2}
                            offset={0.5}
                        >
                            <IconLogo />
                        </CSSTransitionMember>
                    </div>
                    <PersonalInfo />
                    <LanguageInfo />
                    <ContactInfo />
                </CSSTransitionSession >
            </div>
        )
    }
}

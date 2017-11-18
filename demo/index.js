import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LanguageInfo from "./LanguageInfo";
import IconLogo from "./Icon";
import { CSSTransitionSession, CSSTransitionMember } from "../dist";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        setTimeout(
            () => {
                this.setState({ i: Math.random() });
            },
            10
        );
        setInterval(
            () => {
                this.setState({ i: Math.random() });
            },
            1000*5
        );
    }
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
                            <IconLogo id="logo" />
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

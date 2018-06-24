import * as React from 'react';
import { CSSTransitionMember } from '../src';
import IconLogo from "./Icon";

const ContactButton = () =>
    <a>
        <CSSTransitionMember
            name="post-anim"
            time={0.2}
            offset={0.1}
        >
            <IconLogo id={"default"} />
            <p className='info'>bla bla</p>
        </CSSTransitionMember>
    </a>
    ;

const ContactInfo = () =>
    <CSSTransitionMember
        tagName="div"
        name="post-anim"
        time={0.1}
        offset={0}
        style={{
            width: "90%",
            margin:"60px 5%",
        }}
    >
        <nav
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}
        >
            {
                [0, 0, 0, 0].map(
                    (e, i) => <ContactButton key={i} />
                )
            }
        </nav>
    </CSSTransitionMember>
    ;

export default ContactInfo;
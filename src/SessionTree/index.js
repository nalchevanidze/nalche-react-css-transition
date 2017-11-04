import randomName from "./randomName";
import animation from "../animation";

const id = randomName();
let tree, sessionCache;

function resetSession() {
    sessionCache = [];
    tree = {
        node: null,
        children: []
    };
}

function selectParentEvent(parentNode) {

    return sessionCache.filter(
        event => parentNode === event.node
    )[0];

}

function setToParentEvent(element) {
    let parentNode = element.comp.transitionParentNode;
    // has no parent Member
    if (parentNode === "main") {
        tree.children.push(element);
    } else {
        let parentEvent = selectParentEvent(parentNode);
        if (parentEvent) {
            // has parent in list
            parentEvent.children.push(element);
        }
    }
}

function organiseEvents() {

    sessionCache.forEach((event) => {
        setToParentEvent(event);
    });
}

resetSession();
export default {
    clear() {
        resetSession();
    },
    set(comp) {
        sessionCache.push(
            {
                node: comp.dom,
                props: comp.props,
                comp,
                children: []
            }
        );
    },
    id,
    play() {

        organiseEvents();
        console.log(tree, sessionCache);
        animation(tree);
    }
};
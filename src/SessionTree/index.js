import randomName from "./randomName";
import animation from "../animation";

const id = randomName();
let tree, sessionCache;
sessionCache = [];

function detachEvent(comp) {

    return {
        node: comp.dom,
        props: comp.props,
        comp,
        children: []
    };
}

function resetSession(comp) {
    tree = detachEvent(comp);
    sessionCache = [tree];
}

function selectParentEvent(parentNode) {

    return sessionCache.filter(
        event => parentNode === event.node
    )[0];

}

function setToParentEvent(element) {
    let parentNode = element.comp.transitionParentNode;
    // has no parent Member
    let parentEvent = selectParentEvent(parentNode);
    if (parentEvent) {
        // has parent in list
        parentEvent.children.push(element);
    }

}

function organiseEvents() {

    sessionCache.forEach((event) => {
        setToParentEvent(event);
    });
}

export default {

    reset: resetSession,

    set(comp) {
        sessionCache.push( detachEvent(comp));
    },
    id,
    play() {
        organiseEvents();
        animation(tree);
    }
};
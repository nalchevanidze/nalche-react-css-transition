import animation from "../animation";

let tree, sessionCache;
sessionCache = [];

function randomID() {

    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(
        () => String.fromCharCode(65 + Math.random() * 25)
    ).join("");

}

function detachEvent(comp) {

    return {
        node: comp.dom,
        props: comp.props,
        comp,
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

export class SessionTree {

    public id : string = randomID();

    public reset(comp) : void {
        tree = detachEvent(comp);
        sessionCache = [tree];
    };

    public set( comp: any ) : void {
        sessionCache.push( detachEvent(comp));
    }

    public play() : void {
        organiseEvents();
        animation(tree);
    }
};



export default new SessionTree;
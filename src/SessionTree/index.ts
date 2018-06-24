import animation from "../animation";

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
export default class SessionTree {
    public id : string = randomID();
    private tree;
    private sessionCache = [];

    private selectParentEvent(parentNode)  {
        return this.sessionCache.filter(
            event => parentNode === event.node
        )[0];
    }

    private setToParentEvent(element) : void {
        let parentNode = element.comp.transitionParentNode;
        // has no parent Member
        let parentEvent = this.selectParentEvent(parentNode);
        if (parentEvent) {
            // has parent in list
            parentEvent.children.push(element);
        }
    
    }
    
    private organiseEvents() : void {
        this.sessionCache.forEach((event) => {
            this.setToParentEvent(event);
        });
    }

    public reset(comp) : void {
        this.tree = detachEvent(comp);
        this.sessionCache = [this.tree];
    };

    public set( comp: any ) : void {
        this.sessionCache.push( detachEvent(comp));
    }

    public play() : void {
        this.organiseEvents();
        animation(this.tree);
    }
};
import animation from "../animation";

function randomID() {
    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(
        () => String.fromCharCode(65 + Math.random() * 25)
    ).join("");
}

class AnmationEvenet  {
    node;
    props;
    comp;
    children = [];
    parent;
    setTransitionAt: (delay: number) => void;

    constructor(comp){
        this.node = comp.dom;
        this.props = comp.props;
        this.comp = comp;
        this.parent = comp.parent;
        this.setTransitionAt = comp.setTransitionAt;
    }
  
}
export default class SessionTree {
    public id : string = randomID();
    private tree;
    private sessionCache = [];

    private selectParentEvent(parentNode)  {
        return this.sessionCache.filter(
            (event:any) => parentNode === event.node
        )[0];
    }

    private setToParentEvent = (element):void => {
        const parentEvent = this.selectParentEvent(element.parent) || this.tree;
        if(element.parent && parentEvent) {
            parentEvent.children.push(element);
        }
    }

    public reset() : void {
        this.tree = new AnmationEvenet({});
        this.sessionCache = [];
    };

    public addMember( member: React.Component ) : void {
        this.sessionCache.push( new AnmationEvenet(member));
    }

    public play() : void {
        this.sessionCache.forEach( this.setToParentEvent )
        animation(this.tree);
    }
};
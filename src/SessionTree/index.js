import randomName from "./randomName";
import animation from "../animation";
import findParentNode from "./findParentNode";

const id = randomName();
let tree, sessionCache;

function resetSession() {
    sessionCache = [];
    tree = {
        node: null,
        children: []
    };
}

function selectParent(parent) {
    return sessionCache.filter(e => parent === e.node)[0];
}

function setToParent(element) {
    let parent = findParentNode(element.node, id);
    // has no parent Member
    if (parent === "main") {
        tree.children.push(element);
    } else {

        let found = selectParent(parent);

        if (found) {
            // has parent in list
            found.children.push(element);
        }
    }
}

function organiseEvents() {

    sessionCache.forEach((e) => {
        setToParent(e);
    });
}

resetSession();
export default {
    clear() {
        resetSession();
    },
    set(node, props) {
        sessionCache.push(
            {
                node,
                props,
                children: []
            }
        );
    },
    id,
    play() {
        organiseEvents();
        animation(tree);
    }
};
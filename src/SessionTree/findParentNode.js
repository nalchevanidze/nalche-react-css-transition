import SessionTree from "./index";
const id = SessionTree.id;

export default function findParentNode(element) {

    let node = null;

    function find({ parentNode }) {

        if (parentNode) {

            if (parentNode.id === id) {

                node = parentNode;

            } else {

                find(parentNode);

            }

        }
        
    }

    find(element);

    return node;

}
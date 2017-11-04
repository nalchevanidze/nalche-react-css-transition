import SessionTree from "./index";
const id = SessionTree.id;

export default function findParentNode(element) {

    let node = null;

    function find({ parentNode }) {
        if (parentNode) {
            switch (parentNode.id) {
                case id:
                    node = parentNode;
                    break;
                case `${id}CONTAINER`:
                    node = "main";
                    break;
                default:
                    find(parentNode);
                    break;
            }
        }
    }

    find(element);

    return node;

}
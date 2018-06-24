export default function findParentNode( sessionId :string , element ) {
    let node = null;
    function find({ parentNode }) {
        if (parentNode) {
            if (parentNode.id === sessionId) {
                node = parentNode;
            } else {
                find(parentNode);
            }
        }
    }
    find(element);
    return node;
}

export default function findParentNode(element, id) {

    let node = null;

    function find(c) {

        if (c.parentNode) {
            if (c.parentNode.id === id) {
                node = c.parentNode;

            } else if (c.parentNode.id === id + "CONTAINER") {
                node = "main";
            }
            else {
                find(c.parentNode);
            }
        }

    }

    find(element);

    return node;

}
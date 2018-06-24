"use strict";
exports.__esModule = true;
function findParentNode(sessionId, element) {
    var node = null;
    function find(_a) {
        var parentNode = _a.parentNode;
        if (parentNode) {
            if (parentNode.id === sessionId) {
                node = parentNode;
            }
            else {
                find(parentNode);
            }
        }
    }
    find(element);
    return node;
}
exports["default"] = findParentNode;

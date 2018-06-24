"use strict";
exports.__esModule = true;
function listEnd(element, startTime) {
    if (startTime === void 0) { startTime = 0; }
    var fullOffset = startTime;
    element.children.forEach(function (eventNode) {
        var offset = fullOffset;
        if (eventNode.setTransitionAt) {
            eventNode.setTransitionAt(offset);
        }
        if (eventNode.children.length > 0) {
            var delay = eventNode.props.inner || 0;
            listEnd(eventNode, fullOffset + delay);
        }
        fullOffset = fullOffset + eventNode.props.offset;
    });
}
function animation(tree) {
    setTimeout(function () {
        listEnd(tree, 0);
    }, 1);
}
exports["default"] = animation;

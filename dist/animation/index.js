"use strict";
exports.__esModule = true;
function listEnd(element, startTime) {
    if (startTime === void 0) { startTime = 0; }
    var fullOffset = startTime;
    element.children.forEach(function (e) {
        var offset = fullOffset;
        if (e.comp) {
            e.comp.setTransitionAt(offset);
        }
        if (e.children.length > 0) {
            var delay = e.props.inner || 0;
            listEnd(e, fullOffset + delay);
        }
        fullOffset = fullOffset + e.props.offset;
    });
}
function animation(tree) {
    setTimeout(function () {
        listEnd(tree, 0);
    }, 1);
}
exports["default"] = animation;

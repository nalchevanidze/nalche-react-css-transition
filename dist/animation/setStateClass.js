"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setStateClass;
function generateState(name, index) {
    var options = ["end", "start"];
    var Newindex = Number(!!index);
    return {
        remove: name + "-" + options[Newindex],
        add: name + "-" + options[1 - Newindex]
    };
}
function setStateClass(object, name, index) {
    var _generateState = generateState(name, index),
        add = _generateState.add,
        remove = _generateState.remove;

    object.classList.add(add);
    object.classList.remove(remove);
}
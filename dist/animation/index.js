"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = animation;

var _delayAnimation = require("./delayAnimation");

var _delayAnimation2 = _interopRequireDefault(_delayAnimation);

var _setStateClass = require("./setStateClass");

var _setStateClass2 = _interopRequireDefault(_setStateClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listEnd(element) {
    var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


    var fullOffset = startTime;

    element.children.forEach(function (e) {
        var offset = fullOffset;
        (0, _delayAnimation2.default)(e.node, e.props.time, offset);
        (0, _setStateClass2.default)(e.node, e.props.name, true);
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
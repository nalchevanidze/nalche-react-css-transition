"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _randomName = require("./randomName");

var _randomName2 = _interopRequireDefault(_randomName);

var _animation = require("../animation");

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = (0, _randomName2.default)();
var tree = void 0,
    sessionCache = void 0;

function resetSession() {
    sessionCache = [];
    tree = {
        node: null,
        children: []
    };
}

function selectParentEvent(parentNode) {

    return sessionCache.filter(function (event) {
        return parentNode === event.node;
    })[0];
}

function setToParentEvent(element) {
    var parentNode = element.comp.transitionParentNode;
    // has no parent Member
    if (parentNode === "main") {
        tree.children.push(element);
    } else {
        var parentEvent = selectParentEvent(parentNode);
        if (parentEvent) {
            // has parent in list
            parentEvent.children.push(element);
        }
    }
}

function organiseEvents() {

    sessionCache.forEach(function (event) {
        setToParentEvent(event);
    });
}

resetSession();
exports.default = {
    clear: function clear() {
        resetSession();
    },
    set: function set(comp) {
        sessionCache.push({
            node: comp.dom,
            props: comp.props,
            comp: comp,
            children: []
        });
    },

    id: id,
    play: function play() {

        organiseEvents();
        console.log(tree, sessionCache);
        (0, _animation2.default)(tree);
    }
};
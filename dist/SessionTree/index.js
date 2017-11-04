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
sessionCache = [];

function detachEvent(comp) {

    return {
        node: comp.dom,
        props: comp.props,
        comp: comp,
        children: []
    };
}

function resetSession(comp) {
    tree = detachEvent(comp);
    sessionCache = [tree];
}

function selectParentEvent(parentNode) {

    return sessionCache.filter(function (event) {
        return parentNode === event.node;
    })[0];
}

function setToParentEvent(element) {
    var parentNode = element.comp.transitionParentNode;
    // has no parent Member
    var parentEvent = selectParentEvent(parentNode);
    if (parentEvent) {
        // has parent in list
        parentEvent.children.push(element);
    }
}

function organiseEvents() {

    sessionCache.forEach(function (event) {
        setToParentEvent(event);
    });
}

exports.default = {

    reset: resetSession,

    set: function set(comp) {
        sessionCache.push(detachEvent(comp));
    },

    id: id,
    play: function play() {
        organiseEvents();
        console.log(tree);
        (0, _animation2.default)(tree);
    }
};
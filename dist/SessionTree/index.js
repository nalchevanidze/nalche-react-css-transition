"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _randomName = require("./randomName");

var _randomName2 = _interopRequireDefault(_randomName);

var _animation = require("../animation");

var _animation2 = _interopRequireDefault(_animation);

var _findParentNode = require("./findParentNode");

var _findParentNode2 = _interopRequireDefault(_findParentNode);

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

function selectParent(parent) {
    return sessionCache.filter(function (e) {
        return parent === e.node;
    })[0];
}

function setToParent(element) {
    var parent = (0, _findParentNode2.default)(element.node, id);
    // has no parent Member
    if (parent === "main") {
        tree.children.push(element);
    } else {

        var found = selectParent(parent);

        if (found) {
            // has parent in list
            found.children.push(element);
        }
    }
}

function organiseEvents() {

    sessionCache.forEach(function (e) {
        setToParent(e);
    });
}

resetSession();
exports.default = {
    clear: function clear() {
        resetSession();
    },
    set: function set(node, props) {
        sessionCache.push({
            node: node,
            props: props,
            children: []
        });
    },

    id: id,
    play: function play() {
        organiseEvents();
        (0, _animation2.default)(tree);
    }
};
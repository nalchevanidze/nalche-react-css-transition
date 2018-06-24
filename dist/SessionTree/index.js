"use strict";
exports.__esModule = true;
var animation_1 = require("../animation");
function randomID() {
    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(function () { return String.fromCharCode(65 + Math.random() * 25); }).join("");
}
function detachEvent(comp) {
    return {
        node: comp.dom,
        props: comp.props,
        comp: comp,
        children: []
    };
}
var SessionTree = /** @class */ (function () {
    function SessionTree() {
        this.id = randomID();
        this.sessionCache = [];
    }
    SessionTree.prototype.selectParentEvent = function (parentNode) {
        return this.sessionCache.filter(function (event) { return parentNode === event.node; })[0];
    };
    SessionTree.prototype.setToParentEvent = function (element) {
        var parentNode = element.comp.transitionParentNode;
        // has no parent Member
        var parentEvent = this.selectParentEvent(parentNode);
        if (parentEvent) {
            // has parent in list
            parentEvent.children.push(element);
        }
    };
    SessionTree.prototype.organiseEvents = function () {
        var _this = this;
        this.sessionCache.forEach(function (event) {
            _this.setToParentEvent(event);
        });
    };
    SessionTree.prototype.reset = function (comp) {
        this.tree = detachEvent(comp);
        this.sessionCache = [this.tree];
    };
    ;
    SessionTree.prototype.set = function (comp) {
        this.sessionCache.push(detachEvent(comp));
    };
    SessionTree.prototype.play = function () {
        this.organiseEvents();
        animation_1["default"](this.tree);
    };
    return SessionTree;
}());
exports["default"] = SessionTree;
;

"use strict";
exports.__esModule = true;
var animation_1 = require("../animation");
function randomID() {
    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(function () { return String.fromCharCode(65 + Math.random() * 25); }).join("");
}
var AnmationEvenet = /** @class */ (function () {
    function AnmationEvenet(comp) {
        this.children = [];
        this.node = comp.dom;
        this.props = comp.props;
        this.comp = comp;
        this.parent = comp.parent;
        this.setTransitionAt = comp.setTransitionAt;
    }
    return AnmationEvenet;
}());
var SessionTree = /** @class */ (function () {
    function SessionTree() {
        var _this = this;
        this.id = randomID();
        this.sessionCache = [];
        this.setToParentEvent = function (element) {
            var parentEvent = _this.selectParentEvent(element.parent) || _this.tree;
            if (element.parent && parentEvent) {
                parentEvent.children.push(element);
            }
        };
    }
    SessionTree.prototype.selectParentEvent = function (parentNode) {
        return this.sessionCache.filter(function (event) { return parentNode === event.node; })[0];
    };
    SessionTree.prototype.reset = function () {
        this.tree = new AnmationEvenet({});
        this.sessionCache = [];
    };
    ;
    SessionTree.prototype.addMember = function (member) {
        this.sessionCache.push(new AnmationEvenet(member));
    };
    SessionTree.prototype.play = function () {
        this.sessionCache.forEach(this.setToParentEvent);
        animation_1["default"](this.tree);
    };
    return SessionTree;
}());
exports["default"] = SessionTree;
;

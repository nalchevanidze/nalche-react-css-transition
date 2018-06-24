"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var SessionTree_1 = require("./SessionTree");
var session = new SessionTree_1["default"]();
;
var styleGenerator = function (duration, delay) {
    if (duration === void 0) { duration = 0; }
    if (delay === void 0) { delay = 0; }
    return ({
        transitionDuration: (duration * 1000) + "ms",
        transitionDelay: (delay * 1000) + "ms"
    });
};
var findParentNode_1 = require("./SessionTree/findParentNode");
var defaultStyle = styleGenerator();
var CSSTransitionMember = /** @class */ (function (_super) {
    __extends(CSSTransitionMember, _super);
    function CSSTransitionMember() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.generateClassName = function (mode) {
            var _a = _this.props, className = _a.className, name = _a.name;
            return [className, name + "-" + mode].filter(function (e) { return !!e; }).join(" ");
        };
        _this.setTransitionAt = function (delay) {
            _this.setStyle(styleGenerator(_this.props.time, delay));
            _this.dom.className = _this.generateClassName("end");
        };
        return _this;
    }
    CSSTransitionMember.prototype.componentDidMount = function () {
        this.dom = ReactDOM.findDOMNode(this);
        this.parent = findParentNode_1["default"](session.id, this.dom);
        session.addMember(this);
    };
    CSSTransitionMember.prototype.setStyle = function (style) {
        Object.assign(this.dom.style, style);
    };
    CSSTransitionMember.prototype.componentWillUpdate = function () {
        this.dom.className = this.generateClassName("start");
        this.setStyle(defaultStyle);
        session.addMember(this);
    };
    CSSTransitionMember.prototype.render = function () {
        var _a = this.props, _b = _a.tagName, Tag = _b === void 0 ? "div" : _b, children = _a.children, style = _a.style;
        // set animation-start class for animation
        var mainstyle = style ? __assign({}, defaultStyle, style) :
            defaultStyle;
        return React.createElement(Tag, { className: this.generateClassName("start"), id: session.id, style: mainstyle }, children);
    };
    return CSSTransitionMember;
}(React.Component));
exports.CSSTransitionMember = CSSTransitionMember;
;
var CSSTransitionSession = /** @class */ (function (_super) {
    __extends(CSSTransitionSession, _super);
    function CSSTransitionSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSSTransitionSession.prototype.componentDidMount = function () {
        session.play();
    };
    CSSTransitionSession.prototype.componentDidUpdate = function () {
        session.play();
    };
    CSSTransitionSession.prototype.render = function () {
        session.reset();
        var _a = this.props, _b = _a.tagName, Tag = _b === void 0 ? "div" : _b, className = _a.className, children = _a.children;
        return React.createElement(Tag, { className: className, id: session.id }, children);
    };
    return CSSTransitionSession;
}(React.Component));
exports.CSSTransitionSession = CSSTransitionSession;

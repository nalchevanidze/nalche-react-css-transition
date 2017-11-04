"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SessionTree = require("./SessionTree");

var _SessionTree2 = _interopRequireDefault(_SessionTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSSTransitionSession = function (_React$Component) {
    _inherits(CSSTransitionSession, _React$Component);

    function CSSTransitionSession() {
        _classCallCheck(this, CSSTransitionSession);

        return _possibleConstructorReturn(this, (CSSTransitionSession.__proto__ || Object.getPrototypeOf(CSSTransitionSession)).apply(this, arguments));
    }

    _createClass(CSSTransitionSession, [{
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            //remove old elements from session database
            _SessionTree2.default.clear(this.props);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            // play sesion animations
            _SessionTree2.default.play(this.props);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$tagName = _props.tagName,
                Tag = _props$tagName === undefined ? "span" : _props$tagName,
                className = _props.className,
                children = _props.children;

            return _react2.default.createElement(
                Tag,
                {
                    className: className,
                    id: _SessionTree2.default.id + "CONTAINER"
                },
                children
            );
        }
    }]);

    return CSSTransitionSession;
}(_react2.default.Component);

exports.default = CSSTransitionSession;
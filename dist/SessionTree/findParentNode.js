"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findParentNode;

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = _index2.default.id;

function findParentNode(element) {

    var node = null;

    function find(_ref) {
        var parentNode = _ref.parentNode;

        if (parentNode) {
            switch (parentNode.id) {
                case id:
                    node = parentNode;
                    break;
                case id + "CONTAINER":
                    node = "main";
                    break;
                default:
                    find(parentNode);
                    break;
            }
        }
    }

    find(element);

    return node;
}
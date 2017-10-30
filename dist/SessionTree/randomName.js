"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomID;
function randomID() {

    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(function () {
        return String.fromCharCode(65 + Math.random() * 25);
    }).join("");
}
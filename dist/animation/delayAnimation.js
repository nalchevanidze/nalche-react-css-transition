"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = delayAnimation;
function delayAnimation(target, duration, deley) {
    Object.assign(target.style, {
        transitionDuration: duration * 1000 + "ms",
        transitionDelay: deley * 1000 + "ms"
    });
}
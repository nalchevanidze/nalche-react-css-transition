export default function delayAnimation(target, duration, deley) {
    Object.assign(target.style, {
        transitionDuration: (duration * 1000) + "ms",
        transitionDelay: (deley * 1000) + "ms"
    });
}
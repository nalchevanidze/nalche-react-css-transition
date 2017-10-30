import delayAnimation from "./delayAnimation";
import setStateClass from "./setStateClass";

function listEnd(element, startTime = 0) {

    let fullOffset = startTime;

    element.children.forEach(
        (e) => {
            let offset = fullOffset;
            delayAnimation(
                e.node,
                e.props.time,
                offset
            );
            setStateClass(e.node, e.props.name, true);
            if (e.children.length > 0) {
                let delay = e.props.inner || 0;
                listEnd(e, fullOffset + delay);
            }
            fullOffset = fullOffset + e.props.offset;
        }
    );
}

export default function animation(tree) {
    setTimeout(() => {
        listEnd(tree, 0);
    }, 1);
}
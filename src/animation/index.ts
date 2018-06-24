function listEnd(element, startTime = 0) {
    let fullOffset = startTime;
    element.children.forEach(

        (eventNode) => {
            let offset = fullOffset;

            if (eventNode.setTransitionAt) {
                eventNode.setTransitionAt(offset);
            }

            if (eventNode.children.length > 0) {
                let delay = eventNode.props.inner || 0;
                listEnd(eventNode, fullOffset + delay);
            }

            fullOffset = fullOffset + eventNode.props.offset;
        }

    );
}

export default function animation(tree) {
    setTimeout(() => {
        listEnd(tree, 0);
    }, 1);
}
function listEnd(element, startTime = 0) {

    let fullOffset = startTime;

    element.children.forEach(
        (e) => {
            let offset = fullOffset;

            if (e.comp) {
                e.comp.setTransitionAt(offset);
            }

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
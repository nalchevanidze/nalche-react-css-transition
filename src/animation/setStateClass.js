function generateState(name, index) {
    let options = ["end", "start"];
    let Newindex = Number(!!index);
    return {
        remove: name + "-" + options[Newindex],
        add: name + "-" + options[1 - Newindex]
    };
}
export default function setStateClass(object, name, index) {
    let { add, remove } = generateState(name, index);
    object.classList.add(add);
    object.classList.remove(remove);
}



export default function randomID() {

    return "ANIMATION_Session" + [0, 0, 0, 0, 0, 0, 0].map(
        () => String.fromCharCode(65 + Math.random() * 25)
    ).join("");

}



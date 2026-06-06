const envelope =
document.getElementById(
    "closed-envelope"
);

const tapText =
document.querySelector(
    ".tap-text"
);

envelope.addEventListener(
"click", () => {

    envelope.style.pointerEvents =
    "none";

    tapText.style.opacity =
    "0";

    envelope.style.transition =
    "all 1s ease";

    envelope.style.transform =
    "scale(1.15) rotate(3deg)";

    envelope.style.filter =
    "drop-shadow(0 25px 40px rgba(255,255,255,.6))";

    setTimeout(() => {

        envelope.src =
        "assets/envelope/opening.png";

    },800);

    setTimeout(() => {

        envelope.style.transform =
        "scale(1.25)";

    },1600);

    setTimeout(() => {

        envelope.style.opacity =
        "0";

    },2300);

    setTimeout(() => {

        startFlowerAnimation();

    },2800);

});
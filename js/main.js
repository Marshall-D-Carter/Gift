document.addEventListener(
"DOMContentLoaded", () => {

    const memoryPage =
    document.getElementById(
        "memory-page"
    );

    const flowerScreen =
    document.getElementById(
        "flower-screen"
    );

    const secretMessage =
    document.getElementById(
        "secret-message"
    );

    memoryPage.style.display =
    "none";

    flowerScreen.style.display =
    "none";

    secretMessage.style.display =
    "none";

    window.scrollTo(
        0,
        0
    );

});
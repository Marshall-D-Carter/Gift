document.addEventListener(
"DOMContentLoaded", () => {

    const secretMessage =
    document.getElementById(
        "secret-message"
    );

    secretMessage.addEventListener(
    "click", () => {

        const flowers =
        document.querySelectorAll(
            "#flower-container img"
        );

        flowers.forEach(flower => {

            flower.style.transition =
            "transform 2s ease, opacity 2s ease";

            flower.style.transform =
            "translateY(120vh) rotate(180deg)";

            flower.style.opacity =
            "0";

        });

        secretMessage.style.opacity =
        "0";

        setTimeout(() => {

            document
            .getElementById(
                "flower-screen"
            )
            .style.display =
            "none";

            document
            .getElementById(
                "landing"
            )
            .style.display =
            "none";

            const memoryPage =
            document.getElementById(
                "memory-page"
            );

            memoryPage.style.display =
            "block";

            memoryPage.style.animation =
            "fadeUp 1.2s ease";

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },1800);

    });

});
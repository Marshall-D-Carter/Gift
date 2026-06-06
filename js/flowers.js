function startFlowerAnimation(){

    const flowerScreen =
    document.getElementById(
        "flower-screen"
    );

    const container =
    document.getElementById(
        "flower-container"
    );

    const secretMessage =
    document.getElementById(
        "secret-message"
    );

    flowerScreen.style.display =
    "block";

    container.innerHTML = "";

    const flowers = [

        "assets/flowers/flower1.png",
        "assets/flowers/flower2.png",
        "assets/flowers/flower3.png",
        "assets/flowers/flower4.png",
        "assets/flowers/flower5.png",
        "assets/flowers/flower6.png",
        "assets/flowers/flower7.png",
        "assets/flowers/flower8.png",
        "assets/flowers/flower9.png"

    ];

    const centerX =
    window.innerWidth / 2;

    const centerY =
    window.innerHeight / 2;

    let wave = 0;

    const bloom =
    setInterval(() => {

        wave++;

        const flowerCount =
        20 + (wave * 20);

        const radius =
        50 + (wave * 120);

        for(
            let i = 0;
            i < flowerCount;
            i++
        ){

            const flower =
            document.createElement(
                "img"
            );

            flower.src =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];

            const angle =
            Math.random() *
            Math.PI * 2;

            const spread =
            Math.random() *
            radius;

            const x =
            centerX +
            Math.cos(angle) *
            spread;

            const y =
            centerY +
            Math.sin(angle) *
            spread;

            const size =
            80 +
            Math.random() * 40;

            flower.style.position =
            "absolute";

            flower.style.width =
            size + "px";

            flower.style.left =
            x + "px";

            flower.style.top =
            y + "px";

            flower.style.opacity =
            "0";

            flower.style.transform =
            `
            translate(-50%,-50%)
            scale(.2)
            rotate(
            ${Math.random()*360}deg
            )
            `;

            flower.style.transition =
            "all 1.8s ease";

            container.appendChild(
                flower
            );

            setTimeout(() => {

                flower.style.opacity =
                "1";

                flower.style.transform =
                `
                translate(-50%,-50%)
                scale(1)
                rotate(
                ${Math.random()*360}deg
                )
                `;

            },100);

        }

        if(wave >= 8){

            clearInterval(
                bloom
            );

            setTimeout(() => {

                secretMessage.style.display =
                "block";

                secretMessage.style.opacity =
                "1";

            },1200);

        }

    },450);

}
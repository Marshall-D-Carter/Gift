const videos =
document.querySelectorAll(".video-wall video");

videos.forEach(video => {

    video.preload = "metadata";

    video.addEventListener("click", () => {

        if(video.paused){

            videos.forEach(v => {

                if(v !== video){

                    v.pause();

                }

            });

            video.play();

        }else{

            video.pause();

        }

    });

});
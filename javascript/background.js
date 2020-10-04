bg = document.querySelector("body");

const img_num = 4;

function set_bg(imgNumber){
    const image = new Image();
    image.src = `images/background/fall${imgNumber}.jpg`;
    image.classList.add('bgImage');
    bg.prepend(image);
}

function init(){
    const imgNumber = Math.floor(Math.random() * img_num);
    set_bg(imgNumber+1);
}

init();
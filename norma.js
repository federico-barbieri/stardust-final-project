// grab norma img and change its source if in desktop

let clientWidth = document.getElementById('container').clientWidth;

let normaImg = document.querySelector('.norma-img');

let normaNew = "norma/norma-horizontal.webp";

if (clientWidth > 1000){
    normaImg.src = normaNew;
    
} else {
    normaImg.src = "norma/norma-vertical.webp";
}


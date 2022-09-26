

const thatP = document.querySelector('.first-screen-p');

const firstScreen = document.querySelector('#first-screen');

const membership = document.querySelector('#memberships');

let clientWidth = document.getElementById('container').clientWidth;


if (clientWidth > 1000){
    firstScreen.removeChild(thatP);
    membership.appendChild(thatP);
} else if (clientWidth < 1000){
    membership.removeChild(thatP);
    firstScreen.appendChild(thatP);
}

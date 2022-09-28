// make burger menu work

let clientWidths = document.getElementById('container').clientWidth;

const primaryNav = document.querySelector('#primary-navigation');

const navToggle = document.querySelector('.mobile-nav-toggle');

let num = 0;

navToggle.addEventListener('click', () => {
    console.log(num);
    num++;
    console.log(num);

    if (num % 2 !== 0 ){

        // if you click the burger the ul shows goes from translateX 120% to 10%

        primaryNav.style.transform = "translateX(10%)";

        // the ul goes from display none to flex

        primaryNav.style.display = "flex";

        // the burger turns into a white X and scales from nothing to 2

        navToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
        let burgerX = document.querySelector('.fa-x').style.transform = "scale(2)";
        let burgerWhite = document.querySelector('.fa-x').style.color = "white";
    }
        else if (num % 2 == 0){

        // the ul goes back to the right and has a display of none
        // and the X turns into a burger

        primaryNav.style.display = "none";
        primaryNav.style.transform = "translateX(120%)";
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } 
})

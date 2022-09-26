// make burger menu work

let clientWidth = document.getElementById('container').clientWidth;

const primaryNav = document.querySelector('#primary-navigation');

const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){

        // expand and show the navigation
        primaryNav.style.display = "flex";
        primaryNav.setAttribute('data-visible', true);
        primaryNav.setAttribute('aria-expanded', true);

        // switch burger menu to an X

        navToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
        let burgerX = document.querySelector('.fa-x').style.transform = "scale(2)";
        let burgerWhite = document.querySelector('.fa-x').style.color = "white";

    } else if (visibility === "true"){
        primaryNav.style.display = "none";
        primaryNav.setAttribute('data-visible', false);
        primaryNav.setAttribute('aria-expanded', false);
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } 
    else if (visibility === "false" && clientWidth > 800){
        primaryNav.style.display = "flex";
    } 
})

//
//
//




// make burger menu work

const primaryNav = document.querySelector('#primary-navigation');

const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){

        // expand and show the navigation

        primaryNav.setAttribute('data-visible', true);
        primaryNav.setAttribute('aria-expanded', true);

        // switch burger menu to an X

        navToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
        let burgerX = document.querySelector('.fa-x').style.transform = "scale(2)";

    } else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        primaryNav.setAttribute('aria-expanded', false);
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})

//
//
//
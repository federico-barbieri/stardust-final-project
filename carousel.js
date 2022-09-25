// change img source

const firstScreen = document.querySelector('#first-screen');

let textH1 = document.querySelector('h1');

// get size of device

let clientWidth = document.getElementById('container').clientWidth;


function changeScreen1 () {
    

    // if screen is smaller than 1000px then stick to the vertical imgs

    if(clientWidth <= 460){
    firstScreen.style.background = "url('first-screen/mobile/success.webp')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "SUCCESS AS A WAY OF LIVING";
    } else if (clientWidth > 460 && clientWidth < 600) {

    // if desktop, use horizontal
    
    firstScreen.style.background = "url('first-screen/mobile/success.webp')";
    firstScreen.style.backgroundPosition = "top";
    firstScreen.style.backgroundSize = "cover";
    firstScreen.style.backgroundRepeat = "no-repeat";
    textH1.textContent = "SUCCESS AS A WAY OF LIVING";
    }

    else if (clientWidth > 460 && clientWidth < 600) {

        // if desktop, use horizontal
        
        firstScreen.style.background = "url('first-screen/desktop/desktop-bikini4.webp')";
        firstScreen.style.backgroundPosition = "center";
        firstScreen.style.backgroundSize = "cover";
        firstScreen.style.backgroundRepeat = "no-repeat";
        textH1.textContent = "SUCCESS AS A WAY OF LIVING";
        }
}


function changeScreen2 () {

    if(clientWidth <= 460){
    firstScreen.style.background = "url('first-screen/mobile/junior.webp')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "FIRST STEPS ARE THE SHINIEST";
    } else if (clientWidth > 460 && clientWidth < 600) {

        // if desktop, use horizontal
        
        firstScreen.style.background = "url('first-screen/mobile/junior.webp')";
        firstScreen.style.backgroundPosition = "center";
        firstScreen.style.backgroundSize = "cover";
        firstScreen.style.backgroundRepeat = "no-repeat";
        textH1.textContent = "FIRST STEPS ARE THE SHINIEST";
        }
        else if (clientWidth > 600) {

            // if desktop, use horizontal
            
            firstScreen.style.background = "url('first-screen/desktop/desktop-bikini3.webp')";
            firstScreen.style.backgroundPosition = "center";
            firstScreen.style.backgroundSize = "cover";
            firstScreen.style.backgroundRepeat = "no-repeat";
            textH1.textContent = "FIRST STEPS ARE THE SHINIEST";
            }
    }


function changeScreen3 () {
    if(clientWidth <= 460){
    firstScreen.style.background = "url('first-screen/mobile/card.webp')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "BIG DREAMS AHEAD";
    } else if (clientWidth > 460 && clientWidth < 600) {

        // if desktop, use horizontal
        
        firstScreen.style.background = "url('first-screen/mobile/card.webp')";
        firstScreen.style.backgroundPosition = "center";
        firstScreen.style.backgroundSize = "cover";
        firstScreen.style.backgroundRepeat = "no-repeat";
        textH1.textContent = "BIG DREAMS AHEAD";
        }
    else if (clientWidth > 600){

        // if desktop, use horizontal
        
        firstScreen.style.background = "url('first-screen/desktop/desktop-bikini.webp')";
        firstScreen.style.backgroundPosition = "center";
        firstScreen.style.backgroundSize = "cover";
        firstScreen.style.backgroundRepeat = "no-repeat";
        textH1.textContent = "BIG DREAMS AHEAD";
        }
}

function changeScreen4 () {
    if(clientWidth <= 460){
    firstScreen.style.background = "url('first-screen/mobile/milestone.webp')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "REACH YOUR MILESTONE IN STYLE";
    } else if (clientWidth > 460 && clientWidth < 600) {

        // if desktop, use horizontal
        
        firstScreen.style.background = "url('first-screen/mobile/milestone.webp')";
        firstScreen.style.backgroundPosition = "top";
        firstScreen.style.backgroundSize = "cover";
        firstScreen.style.backgroundRepeat = "no-repeat";
        textH1.textContent = "REACH YOUR MILESTONE IN STYLE";
        } 
        else if (clientWidth > 600) {

            // if desktop, use horizontal
            
            firstScreen.style.background = "url('first-screen/desktop/desktop-bikini2.webp')";
            firstScreen.style.backgroundPosition = "center";
            firstScreen.style.backgroundSize = "cover";
            firstScreen.style.backgroundRepeat = "no-repeat";
            textH1.textContent = "REACH YOUR MILESTONE IN STYLE";
            }
}

function everything(){
    timies();
}


function timies(){
    setTimeout(changeScreen1, 3000);
    setTimeout(changeScreen2, 6000);
    setTimeout(changeScreen3, 9000);
    setTimeout(changeScreen4, 12000);
    setTimeout(everything, 15000);
}


   
    setTimeout(timies, 100);


//
//
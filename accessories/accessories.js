//normal url
const url = "https://stardustlab-da2b.restdb.io/rest/products";


// api key

const options = { 
    headers: {
        'x-apikey': "632c84d6bf647d0a5c19865e"
    }, 
}


fetch(url, options)
.then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
})
.then(data => {
    // we have the data 
    console.log(data); 
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})

//
//
//

// FUNCTION FOR THE RENTAL CATEGORY

function handleData(stardustData){
    
    
    stardustData.forEach( accessory => {

        // make template

        // grab it

         // add data only if the type of the element's category is "BRACELET"


        if (accessory.Type == "Bracelet"){

            //
            // IF THE ACCESSORY HAS A TYPE OF BRACELET GO TO JEWELRY DON'T BE STUBBORN
            //

            let jewelryTemplate = document.querySelector('.jewelry-template').content;

            // clone it

            let jewelryClone = jewelryTemplate.cloneNode(true);


             // add the image of the product

             jewelryClone.querySelector('img').src = accessory.img;


            // add the name of the product

            jewelryClone.querySelector('h3').textContent = accessory.Description; 
            
            // add the price of the product

            jewelryClone.querySelector('p').textContent = `${accessory.Price} 100 DKK`; 

            // append to parent

            let jewelryDaddy = document.querySelector(".jewelry-grid");

            jewelryDaddy.appendChild(jewelryClone); 

        }
        else if (accessory.Type == "Shoes"){

            //
            // IF THE ACCESSORY HAS A TYPE OF SHOES GO TO SHOES DON'T BE STUBBORN
            //

            let shoesTemplate = document.querySelector('.shoes-template').content;

            // clone it

            let shoesClone = shoesTemplate.cloneNode(true);


             // add the image of the product

             shoesClone.querySelector('img').src = accessory.img;


            // add the name of the product

            shoesClone.querySelector('h3').textContent = accessory.Description; 
            
            // add the price of the product

            shoesClone.querySelector('p').textContent = `${accessory.Price} DKK`; 

            // append to parent

            let shoesDaddy = document.querySelector(".shoes-grid");

            shoesDaddy.appendChild(shoesClone); 

        }
        else if (accessory.Type == "Cosmetic"){

            //
            // IF THE ACCESSORY HAS A TYPE OF COSMETIC GO TO TAN DON'T BE STUBBORN
            //

            let tanTemplate = document.querySelector('.tan-template').content;

            // clone it

            let tanClone = tanTemplate.cloneNode(true);


             // add the image of the product

             tanClone.querySelector('img').src = accessory.img;


            // add the name of the product

            tanClone.querySelector('h3').textContent = accessory.Description; 
            
            // add the price of the product

            tanClone.querySelector('p').textContent = `${accessory.Price} DKK`; 

            // append to parent

            let tanDaddy = document.querySelector(".tan-grid");

            tanDaddy.appendChild(tanClone); 

        }
    }) 
}
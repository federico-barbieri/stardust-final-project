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
    
    
    stardustData.forEach( bikini => {

        // make template

        // grab it

         // add data only if the type of the element's category is "Rental"


        if (bikini.Category == "Rental"){

            //
            // I'M PUTTING BOTH RENTALS AND READY WITH THE SAME BIKINIS
            // FOR NUMBERS' SAKE
            //

            let rentalTemplate = document.querySelector('.rentals-template').content;

            let readyTemplate = document.querySelector('.ready-template').content;

            // clone it

            let rentalClone = rentalTemplate.cloneNode(true);

            let readyClone = readyTemplate.cloneNode(true);


             // add a link to specific products / add the image of the product
             rentalClone.querySelector('a').href = `../particular-product/particular-product.html?_id=${bikini._id}`   
                rentalClone.querySelector('img').src = bikini.img;

            readyClone.querySelector('a').href = `../particular-product/particular-product.html?_id=${bikini._id}`   
             readyClone.querySelector('img').src = bikini.img;


            // add the name of the product

            rentalClone.querySelector('h3').textContent = bikini.Name; 

            readyClone.querySelector('h3').textContent = bikini.Name;
            
            // add the price of the product

            rentalClone.querySelector('p').textContent = `${bikini.Price} DKK`; 

            readyClone.querySelector('p').textContent = `${bikini.Price} DKK`;

            // append to parent

            let rentalDaddy = document.querySelector(".rentals-grid");

            rentalDaddy.appendChild(rentalClone); 

            let readyDaddy = document.querySelector(".ready-grid");

            readyDaddy.appendChild(readyClone); 

        }
    }) 
}
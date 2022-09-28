


const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get('_id');

const options = { 
    headers: {
        'x-apikey': "632c84d6bf647d0a5c19865e"
    }, 
}


console.log(cat)
const url = `https://stardustlab-da2b.restdb.io/rest/products?q={"_id":"${cat}"}`;

// fetch the data


fetch(url, options).then(res=>res.json()).then(data=>showProduct(data));

//populate the page

function showProduct(product){
console.log(product);

document.querySelector('.particular-product-img').src = product[0].img;
document.querySelector('.particular-product-h3').textContent = product[0].Description;
document.querySelector('.particular-product-p').textContent = "dkk " + product[0].Price;
}
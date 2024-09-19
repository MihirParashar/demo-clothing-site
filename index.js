import { products } from "./product_data.js";

function scrollTitleAnimation() {
    let scrollTop = (window.scrollY || document.scrollTop)  - (document.clientTop || 0);
    let size = Math.max(60 - ((scrollTop / 10) || 0), 20);

    document.querySelector('#Title').setAttribute('style', 'font-size: '+size+'px;');
}

function createProductElement(product, productListingsGrid) {
    const productElement = document.createElement("div");
    productElement.className = "product-listing";
    productElement.onclick = () => {viewProduct(product.id)};

    const previewElement = document.createElement("img");
    previewElement.className = "product-preview";
    previewElement.src = product.image;
    productElement.appendChild(previewElement);

    const titleElement = document.createElement("p");
    titleElement.className = "product-info";
    titleElement.innerHTML = product.title;
    productElement.appendChild(titleElement);

    const priceElement = document.createElement("p");
    priceElement.className = "product-info";
    priceElement.innerHTML = `$${(Math.round(product.price * 100) / 100).toFixed(2)}`; // Always show 2 decimal places
    productElement.appendChild(priceElement);

    productListingsGrid.appendChild(productElement);
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
    //PHP My Admin or API to store clothing with UUIDs 
}

function displayProducts(clothingData, productListingsGrid) {
    for (let i = 0; i < clothingData.length; i++) {
        createProductElement(clothingData[i], productListingsGrid);
    }
}

window.onload = (event) => {
    let productListingsGrid = document.querySelector(".product-listings-grid");
    window.addEventListener('scroll', scrollTitleAnimation);
    // fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    //         .then(response => response.json())
    //         .then(json => displayProducts(json, productListingsGrid));

    displayProducts(products, productListingsGrid);
};
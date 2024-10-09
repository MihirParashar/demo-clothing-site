import { getAllProducts } from "./modules/get_products.js";
import { createProductElement } from "./modules/product_element_factory.js";

function scrollTitleAnimation() {
    let scrollTop = (window.scrollY || document.scrollTop)  - (document.clientTop || 0);
    let size = Math.max(60 - ((scrollTop / 10) || 0), 20);

    document.querySelector('#Title').setAttribute('style', 'font-size: '+size+'px;');
} 

function displayErrorText() {
    const errorTextElement = document.createElement("h1");
    errorTextElement.textContent = "API is not running right now! Please check back later!";
    document.body.appendChild(errorTextElement);
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function displayProducts(clothingData, productListingsGrid) {
    for (let product of clothingData) {
        createProductElement(product, productListingsGrid, viewProduct);
    }
}

window.onload = async (event) => {
    let productListingsGrid = document.querySelector(".product-listings-grid");
    window.addEventListener('scroll', scrollTitleAnimation);
    try {
        let products = await getAllProducts();
        displayProducts(products, productListingsGrid);
    } catch (error) {
        displayErrorText();
        console.error(error);
        return;
    }
};  
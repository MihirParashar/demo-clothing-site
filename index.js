import { getAllProducts } from "./modules/get_products.js";
import { displayProduct, displayErrorText } from "./modules/element_factory.js";

function scrollTitleAnimation() {
    let scrollTop = (window.scrollY || document.scrollTop)  - (document.clientTop || 0);
    let size = Math.max(60 - ((scrollTop / 10) || 0), 20);

    document.querySelector('#Title').setAttribute('style', 'font-size: '+size+'px;');
} 

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function displayProducts(clothingData, productListingsGrid) {
    for (let product of clothingData) {
        displayProduct(product, productListingsGrid, viewProduct);
    }
}

window.onload = async (event) => {
    let productListingsGrid = document.querySelector(".product-listings-grid");
    window.addEventListener('scroll', scrollTitleAnimation);
    try {
        let products = await getAllProducts();
        displayProducts(products, productListingsGrid);
    } catch (error) {
        displayErrorText("API is not responding right now! Please check back later!");
        console.error(error);
        return;
    }
};  
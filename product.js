import { getProduct } from "./modules/get_products.js";
import { displayProduct, displayErrorText } from "./modules/element_factory.js";


function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id)) {
        cart.push(id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = `cart.html`;
}
// assets/uploaded gitignore, sample images saved, download instructions, database creator
// OOP cart?

window.onload = async (event) => {
    const id = window.location.search.split("?id=")[1]; 
    if (!id) {
        displayErrorText("Invalid search!");
        return;
    }  
    try {
        let product = await getProduct(id);
        displayProduct(product, document.body, addToCart);
    } catch (error) {
        displayErrorText("API is not responding right now! Please check back later!");
        console.error(error);
        return;
    }
};
import { getProduct } from "./modules/get_products.js";
import { displayErrorText, displayProduct } from "./modules/element_factory.js";

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.includes(id)) {
        cart = cart.filter(item => item !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


window.onload = async (event) => {
    let productListingsGrid = document.querySelector(".product-listings-grid");
    try {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart || cart.length == 0) {
            displayErrorText("Cart is empty!");
            return;
        }
        for (let itemID of cart) {
            let product = await getProduct(itemID);
            displayProduct(product, productListingsGrid, removeFromCart);
        }
    } catch (error) {
        displayErrorText("API is not responding right now! Please check back later!");
        console.error(error);
        return;
    }
};  
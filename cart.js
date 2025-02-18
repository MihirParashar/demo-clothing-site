import { getProduct } from "./modules/get_products.js";
import { displayErrorText, displayProduct } from "./modules/element_factory.js";

function viewProduct(productID) {
    window.location.href = `product.html?id=${productID}`;
}

function removeFromCart(productID) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.includes(productID)) {
        cart = cart.filter(id => id !== productID);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


window.addEventListener("load", async (event) => {
    let productListingsGrid = document.querySelector(".product-listings-grid");
    try {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart || cart.length == 0) {
            displayErrorText("Cart is empty!");
            return;
        }
        for (let productID of cart) {
            let product = await getProduct(productID);
            displayProduct(product, productListingsGrid, removeFromCart);
        }
    } catch (error) {
        displayErrorText("API error! Please check back later!");
        console.error(error);
        return;
    }
});  
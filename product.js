import { getProduct } from "./modules/get_products.js";
import { createProductElement } from "./modules/product_element_factory.js";


function buyProduct(id) {
    // To be implemented
    console.log(`buying product ${id}`);
}

window.onload = async (event) => {
    const id = window.location.search.split("?id=")[1];   
    let products = await getProduct(id);
    const product = products.find((product) => {return product.id == id});
    createProductElement(product, document.body, buyProduct);
};
import { getProduct } from "./get_products.js";

function createProductElement(product, container, action) {
    const productElement = document.createElement("div");
    productElement.className = container.className == "product-listings-grid" ? "product-listing" : "product-view";
    productElement.onclick = () => { action(product.id) };

    const previewElement = document.createElement("img");
    previewElement.className = "product-preview";
    previewElement.src = "assets/" + product.image;
    productElement.appendChild(previewElement);

    const titleElement = document.createElement("p");
    titleElement.className = "product-info";
    titleElement.innerHTML = product.title;
    productElement.appendChild(titleElement);

    const priceElement = document.createElement("p");
    priceElement.className = "product-info";
    priceElement.innerHTML = `$${(Math.round(product.price * 100) / 100).toFixed(2)}`; // Always show 2 decimal places
    productElement.appendChild(priceElement);

    container.appendChild(productElement);
}

export 


function buyProduct(id) {
    // To be implemented
    console.log("buying product");
}

window.onload = async (event) => {
    const id = window.location.search.split("?id=")[1];   
    let products = await getProduct(id);
    const product = products.find((product) => {return product.id == id});
    // fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(response => response.json())
    //         .then(json => createProductElement(json));
    createProductElement(product, document.body, buyProduct);
};

export { createProductElement };
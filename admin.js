import { getAllProducts } from "./modules/get_products.js";
import { displayErrorText } from "./modules/element_factory.js";

function deleteProduct(id) {
    fetch(`http://localhost:3000/delete?id=${id}`);
    window.location.reload();
}

// TODO: Database creator with sample items
// TODO: Work without API
// TODO: Clothes search

window.onload = async () => {
    const productsTable = document.querySelector(".products-table");
    
    try {
        let products = await getAllProducts();
        console.log(products);
        for (let product of products) {
            const row = document.createElement("tr");

            const title = document.createElement("td");
            title.textContent = product.title;
            row.appendChild(title);

            const price = document.createElement("td");
            price.textContent = product.price;
            row.appendChild(price);

            const image = document.createElement("td");
            image.textContent = product.image;
            row.appendChild(image);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.onclick = () => { deleteProduct(product.id) };
            row.appendChild(deleteButton);

            productsTable.appendChild(row);
        }
    } catch (error) {
        displayErrorText("API is not responding right now! Please check back later!");
        console.error(error);
        return;
    }
}
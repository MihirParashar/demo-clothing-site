import { getAllProducts } from "./modules/get_products.js";
import { displayErrorText } from "./modules/element_factory.js";

function deleteProduct(id) {
    fetch(`http://localhost:3000/delete?id=${id}`);
    localStorage.removeItem("cart");
    window.location.reload();
}

// TODO: Database creator with sample items
// TODO: Work without API
// TODO: Clothes search

window.addEventListener("load", async () => {
    const productsTable = document.querySelector(".products-table");
    const form = document.getElementById("addProductForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch("http://localhost:3000/create", {
            method: "POST",
            body: formData
        });
    });

    try {
        let products = await getAllProducts();
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
        displayErrorText("API error! Please check back later!");
        console.error(error);
        return;
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("admin");
});
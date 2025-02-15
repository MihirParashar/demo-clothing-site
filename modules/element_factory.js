function displayProduct(product, container, action) {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.onclick = () => { action(product.id) };

    const imageElement = document.createElement("img");
    imageElement.className = "product-image";
    imageElement.src = "assets/uploaded/" + product.image;
    productElement.appendChild(imageElement);

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

function displayErrorText(text) {
    const errorTextElement = document.createElement("h1");
    errorTextElement.classList.add("centered");
    errorTextElement.textContent = text;
    document.body.appendChild(errorTextElement);
}

export { displayProduct, displayErrorText };
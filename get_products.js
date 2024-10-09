const API_URL = "http://localhost:3000/products/"

async function getProduct(id) {
    let response = await fetch(`${API_URL}?id=${id}`);
    if (!response.ok) {
        console.error("Error fetching: ", response);
        return;
    }

    let product = await response.json();
    return product;
}

async function getAllProducts() {
    let response = await fetch(API_URL);
    if (!response.ok) {
        console.error("Error fetching: ", response);
        return;
    }

    let products = await response.json();
    return products;
}

export { getProduct, getAllProducts }
  
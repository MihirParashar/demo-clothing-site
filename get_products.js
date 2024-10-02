async function getProducts(id) {
    let url = "http://localhost:3000/products"
    if (id) {
        url += `?id=${id}`
    }
    
    let response = await fetch(url);
    if (!response.ok) {
        console.error("Error fetching: ", response);
        return;
    }

    let products = await response.json();
    return products;
}

export { getProducts }
  
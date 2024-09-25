// Normally this would be an API, but I don't want to run a web server 24/7.
// I also can't make it a JSON file because that gives me the CORS error.

let products = []

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
  
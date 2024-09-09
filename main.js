let shopItemsGrid;

function onScroll() {
    let scrollTop = (window.scrollY || document.scrollTop)  - (document.clientTop || 0);
    let size = Math.max(60 - ((scrollTop / 10) || 0), 20);

    document.querySelector('#Title').setAttribute('style', 'font-size: '+size+'px;');
}

function addItem(name, price, image) {
    const item = document.createElement("div");
    item.className = "shop-item";

    const itemPreview = document.createElement("img");
    itemPreview.className = "item-preview";
    itemPreview.src = image;
    item.appendChild(itemPreview);

    const itemName = document.createElement("p");
    itemName.className = "item-info";
    itemName.innerHTML = name;
    item.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.className = "item-info";
    itemPrice.innerHTML = price;
    item.appendChild(itemPrice);

    shopItemsGrid.appendChild(item);
}

window.onload = (event) => {
    shopItemsGrid = document.querySelector(".shop-items-grid");
    window.addEventListener('scroll', onScroll);
    addItem("OG Special Edition \"Whiteout\" Hoodie", "$74.99", "assets/whiteout_hoodie.png");
    addItem("Core Collection \"Arctic White\" Windbreaker", "$92.99", "assets/arctic_white_windbreaker.png");
    addItem("Neon Vibe \"Sunset Orange\" Track Pants", "$38.99", "assets/sunset_orange_trackpants.png");
    addItem("Graffiti Canvas \"Urban Gray\" Hoodie", "$44.99", "assets/urban_gray_hoodie.png");
    addItem("Retro Revival \"Electric Blue\" Crewneck", "$103.99", "assets/electric_blue_crewneck.png");
    addItem("Midnight Runner \"Crimson Red\" Joggers ", "$39.99", "assets/crimson_red_joggers.png");
};
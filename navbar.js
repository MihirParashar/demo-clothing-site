window.addEventListener("load", () => {
    const navbar = document.createElement("div");
    navbar.classList.add("centered", "navbar");
    navbar.innerHTML = `
        <a href="index.html">HOME</a>
        <a href="cart.html">CART</a>
        <a href="admin.html">ADMIN</a>
    `;
    document.body.prepend(navbar);
});
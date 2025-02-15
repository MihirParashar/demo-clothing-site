// Note that this form of authentication/authorization is not secure.

// Password is "admin"
const HASHED_PASSWORD = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";

async function sha256(source) {
    const sourceBytes = new TextEncoder().encode(source);
    const digest = await crypto.subtle.digest("SHA-256", sourceBytes);
    const resultBytes = [...new Uint8Array(digest)];
    return resultBytes.map(x => x.toString(16).padStart(2, '0')).join("");
}

window.addEventListener("load", async () => {
    const form = document.getElementById("loginForm");
    const invalidPasswordText = document.getElementById("invalidPasswordText");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const attempt = data.get("password");
        const hashedAttempt = await sha256(attempt);
        if (hashedAttempt === HASHED_PASSWORD) {
            localStorage.setItem("admin", "true");
            window.location.href = "/admin.html";
            return;
        }
        invalidPasswordText.removeAttribute("hidden");
    });
});
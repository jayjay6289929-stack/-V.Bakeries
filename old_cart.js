 // ==========================
// V.Bakeries Shopping Cart
// ==========================

// Get saved cart
let cart = JSON.parse(localStorage.getItem("vbCart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("vbCart", JSON.stringify(cart));
}

// Update Cart Badge
function updateCartCount() {

    const badge = document.getElementById("cart-count");

    if (!badge) return;

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    badge.textContent = total;

}

// Add Product
const addButton = document.querySelector(".add-to-cart");

if (addButton) {

    addButton.addEventListener("click", () => {

        const name =
            document.querySelector(".product-content h1").textContent;

        const price =
            parseInt(
                document.querySelector(".product-content h2")
                .textContent
                .replace("₦", "")
                .replace(/,/g, "")
            );

        const image =
            document.querySelector(".product-image img").src;

        const existing =
            cart.find(item => item.name === name);

        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                name,

                price,

                image,

                quantity: 1

            });

        }

        saveCart();

        updateCartCount();

        alert(name + " added to cart! 🛒");

        console.log(cart);

    });

}

updateCartCount();
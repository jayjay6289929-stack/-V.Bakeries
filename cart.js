// ==========================
// V.Bakeries Shopping Cart
// ==========================

let cart = JSON.parse(localStorage.getItem("vbCart")) || [];

const cartCount = document.getElementById("cart-count");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function saveCart() {
    localStorage.setItem("vbCart", JSON.stringify(cart));
}

function updateCartCount() {

    if (!cartCount) return;

    let total = 0;

    cart.forEach(item => total += item.quantity);

    cartCount.textContent = total;

}

 function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" width="70">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <p>₦${item.price.toLocaleString()}</p>

                <div class="quantity">

                    <button onclick="decreaseItem(${index})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseItem(${index})">+</button>

                </div>

            </div>

            <button class="remove-item"
                onclick="removeItem(${index})">

                🗑️

            </button>

        </div>

        <hr>

        `;

    });

    if (cartTotal) {

        cartTotal.textContent = "₦" + total.toLocaleString();

    }

}

function increaseItem(index){

    cart[index].quantity++;

    saveCart();

    updateCartCount();

    renderCart();

}

 function decreaseItem(index){

    cart[index].quantity--;

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }

    saveCart();

    updateCartCount();

    renderCart();

}


function removeItem(index){

    const removedItem = cart[index].name;

    cart.splice(index,1);

    saveCart();

    updateCartCount();

    renderCart();

    showToast(removedItem + " removed from cart!");

}
 
// ==========================
// Universal Add To Cart
// ==========================

const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
        const image = button.dataset.image;

        const existing = cart.find(item => item.name === name);

        if (existing) {

            existing.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });

        }

        saveCart();
        updateCartCount();
        renderCart();

        showToast(name + " added to cart!");

    });

});
const cartIcon=document.querySelector(".cart-icon");

if(cartIcon){

    cartIcon.addEventListener("click",()=>{

        cartSidebar.classList.add("active");

        cartOverlay.classList.add("active");

        renderCart();

    });

}

document.getElementById("closeCart")?.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

});

cartOverlay?.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

});

updateCartCount();

renderCart();

 // ==========================
// Checkout Page
// ==========================

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        window.location.href = "checkout.html";

    });

}

function showToast(message){

    const toast=document.getElementById("toast");

    const text=document.getElementById("toastMessage");

    if(!toast) return;

    text.textContent=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}


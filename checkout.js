// =========================
// Load Cart
// =========================

let cart = JSON.parse(localStorage.getItem("vbCart")) || [];

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");

// =========================
// Display Cart
// =========================
 
 function renderCheckout() {

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;
        total += subtotal;

        checkoutItems.innerHTML += `

        <div class="checkout-card">

            <img src="${item.image}" class="checkout-image">

            <div class="checkout-info">

                <h3>${item.name}</h3>

                <p class="checkout-desc">
                    Freshly handcrafted with premium ingredients.
                </p>

                <div class="checkout-price">
                    ₦${item.price.toLocaleString()}
                </div>

                   <div class="checkout-qty">

                     <span>Quantity</span>
 
                  <div class="qty-controls">

                  <button onclick="decreaseCheckout(${cart.indexOf(item)})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseCheckout(${cart.indexOf(item)})">+</button>

                </div>

                </div>

                <div class="checkout-subtotal">

                    <span>Subtotal</span>

                    <strong>₦${subtotal.toLocaleString()}</strong>

                </div>
                 
              <div class="checkout-remove">

    <button onclick="removeCheckout(${cart.indexOf(item)})">

        🗑 Remove

    </button>

</div>

            </div>

        </div>

        `;

    });

    document.getElementById("checkoutSubtotal").textContent =
        "₦" + total.toLocaleString();

    document.getElementById("checkoutTotal").textContent =
        "₦" + (total + 3000).toLocaleString();

}
renderCheckout();

function increaseCheckout(index){

    cart[index].quantity++;

    localStorage.setItem("vbCart", JSON.stringify(cart));

    renderCheckout();

}

function decreaseCheckout(index){

    cart[index].quantity--;

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }

    localStorage.setItem("vbCart", JSON.stringify(cart));

    renderCheckout();

}

function removeCheckout(index){

    cart.splice(index,1);

    localStorage.setItem("vbCart", JSON.stringify(cart));

    renderCheckout();

}

// =========================
// Place Order
// =========================

document.getElementById("checkoutForm").addEventListener("submit", function(e){

    e.preventDefault();

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;

    }

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const address = document.getElementById("customerAddress").value;
    const date = document.getElementById("deliveryDate").value;

    let total = 0;

    let message = "🧁 *NEW ORDER - V.Bakeries*%0A%0A";

    message += `👤 Name: ${name}%0A`;
    message += `📞 Phone: ${phone}%0A`;
    message += `📍 Address: ${address}%0A`;
    message += `📅 Delivery Date: ${date}%0A%0A`;

    message += "----------------------------%0A";
    message += "🛒 ORDER ITEMS%0A";
    message += "----------------------------%0A%0A";

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;
        total += subtotal;

        message +=
        `🍰 ${item.name}%0A` +
        `Qty: ${item.quantity}%0A` +
        `Price: ₦${item.price.toLocaleString()}%0A` +
        `Subtotal: ₦${subtotal.toLocaleString()}%0A%0A`;

    });

    message += "----------------------------%0A";
    message += `💰 TOTAL: ₦${total.toLocaleString()}%0A`;

    const bakeryPhone = "2349050967182";

    window.open(
        `https://wa.me/${bakeryPhone}?text=${message}`,
        "_blank"
    );

    // Clear cart after sending
     localStorage.removeItem("vbCart");
cart = [];
renderCheckout();

setTimeout(() => {
    window.location.href = "index.html";
}, 1000);

});
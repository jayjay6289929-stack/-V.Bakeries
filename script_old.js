 /* ==========================================
   V.Bakeries JavaScript
========================================== */

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,.92)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   PRODUCT FILTER
========================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


/* ==========================================
   SEARCH BUTTON
========================================== */

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

    const keyword = prompt("Search our bakery menu");

    if (keyword) {

        alert("Searching for: " + keyword);

    }

});


/* ==========================================
   HERO IMAGE FLOAT
========================================== */

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", e => {

    let x = (window.innerWidth - e.pageX) / 120;

    let y = (window.innerHeight - e.pageY) / 120;

    heroImage.style.transform = `translate(${x}px,${y}px)`;

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".category-card,.product-card,.why-card,.testimonial-card,.feature")
.forEach(el => {

    observer.observe(el);

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   TOP BUTTON STYLE
========================================== */

topButton.style.position = "fixed";

topButton.style.bottom = "30px";

topButton.style.right = "30px";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.borderRadius = "50%";

topButton.style.border = "none";

topButton.style.cursor = "pointer";

topButton.style.background = "#D4A762";

topButton.style.color = "#fff";

topButton.style.fontSize = "22px";

topButton.style.display = "none";

topButton.style.alignItems = "center";

topButton.style.justifyContent = "center";

topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

topButton.style.zIndex = "999";


/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector("form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert("🎉 Thank you for contacting V.Bakeries!\nWe'll get back to you shortly.");

    form.reset();

});


/* ==========================================
   PRODUCT BUTTONS
========================================== */

document.querySelectorAll(".product-bottom button").forEach(button => {

    button.addEventListener("click", () => {

        alert("✅ Product added to cart.");

    });

});


/* ==========================================
   GALLERY EFFECT
========================================== */

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = window.open("");

        popup.document.write(`
            <title>V.Bakeries Gallery</title>
            <img src="${img.src}" 
            style="width:100%;margin:0;background:#111;">
        `);

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = ".5s";


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("🍰 Welcome to V.Bakeries");
console.log("Developed with ❤️");

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

        }else{

            button.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

        }

    });

});

const modal=document.getElementById("quickView");

const quickButtons=document.querySelectorAll(".quick-view-btn");

const close=document.querySelector(".close-modal");

quickButtons.forEach(button=>{

button.addEventListener("click",()=>{

modal.style.display="flex";

});

});

close.addEventListener("click",()=>{

modal.style.display="none";

});

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

};

const qty=document.getElementById("quantity");

document.getElementById("plus").onclick=()=>{

qty.value++;

}

document.getElementById("minus").onclick=()=>{

if(qty.value>1){

qty.value--;

}

}
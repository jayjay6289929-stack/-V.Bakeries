 // Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

 if (galleryImages.length && lightbox && lightboxImg) {

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {

            const card = img.closest(".gallery-item");
            const isTouch = window.matchMedia("(hover: none)").matches;

            if (isTouch && card && !card.classList.contains("active")) {
                return;
            }

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

}

 if (closeLightbox && lightbox) {

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}

// ==========================
// Scroll Reveal Animation
// ==========================

const reveals = document.querySelectorAll(
".hero, .menu-section, .products-section, .bakery-story, .gallery, .contact"
);

function revealOnScroll(){

    const trigger =  window.innerHeight * 0.5;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

reveals.forEach(section=>{

    section.classList.add("reveal");

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader")?.classList.add("hidden");

    },1800);

});

// ==========================
// Product Search
// ==========================
 const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if(searchInput){

const products=[

{name:"Chocolate Cake",page:"product-chocolate.html"},
{name:"Classic Vanilla Cake",page:"product-vanilla.html"},
{name:"Strawberry Delight",page:"product-strawberry.html"},
{name:"Black Forest Cake",page:"product-black-forest.html"},
{name:"Red Velvet Cake",page:"product-red-velvet.html"},
{name:"Wedding Cake",page:"product-wedding.html"},

{name:"Artisan Bread",page:"product-artisan-bread.html"},
{name:"French Baguette",page:"product-baguette.html"},
{name:"Brioche Bread",page:"product-brioche-bread.html"},
{name:"Multigrain Bread",page:"product-multigrain.html"},
{name:"Garlic Bread",page:"product-garlic-bread.html"},
{name:"Sourdough Bread",page:"product-sourdough.html"},

{name:"Croissant",page:"product-croissant.html"},
{name:"Danish Pastry",page:"product-danish.html"},
{name:"Pain au Chocolat",page:"product-pain-au-chocolat.html"},
{name:"Cinnamon Roll",page:"product-cinnamon-roll.html"},
{name:"Fruit Tart",page:"product-fruit-tart.html"},
{name:"Puff Pastry",page:"product-puff-pastry.html"},

{name:"Chocolate Cupcake",page:"product-chocolate-cupcake.html"},
{name:"Vanilla Cupcake",page:"product-vanilla-cupcake.html"},
{name:"Oreo Cupcake",page:"product-oreo-cupcake.html"},
{name:"Strawberry Cupcake",page:"product-strawberry-cupcake.html"},
{name:"Red Velvet Cupcake",page:"product-red-velvet-cupcake.html"},
{name:"Salted Caramel Cupcake",page:"product-salted-caramel-cupcake.html"},

{name:"Chocolate Chip Cookie",page:"product-chocolate-chip-cookie.html"},
{name:"Double Chocolate Cookie",page:"product-double-chocolate-cookie.html"},
{name:"Butter Shortbread Cookie",page:"product-butter-shortbread-cookie.html"},
{name:"Oreo Cookie",page:"product-oreo-cookie.html"},
{name:"Red Velvet Cookie",page:"product-red-velvet-cookie.html"},
{name:"Peanut Butter Cookie",page:"product-peanut-butter-cookie.html"}

];

searchInput.addEventListener("input",()=>{

const value=searchInput.value.toLowerCase();

searchResults.innerHTML="";

if(value===""){

searchResults.style.display="none";

return;

}

const matches=products.filter(product=>

product.name.toLowerCase().includes(value)

);

matches.forEach(product=>{

searchResults.innerHTML+=`

<div class="search-result"

onclick="window.location.href='${product.page}'">

${product.name}

</div>

`;

});

searchResults.style.display=

matches.length?"block":"none";

});

document.addEventListener("click",(e)=>{

if(!e.target.closest(".search-box")){

searchResults.style.display="none";

}

});

searchInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        e.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        const result = products.find(product =>
            product.name.toLowerCase().includes(query)
        );

        if(result){

            window.location.href = result.page;

        }else{

            alert("No product found.");

        }

    }

});

}

const slides=document.querySelectorAll(".hero-slider .slide");

let currentSlide=0;

if(slides.length){

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

},3500);

}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const phone = document.getElementById("contactPhone").value;
        const message = document.getElementById("contactMessage").value;

        const bakeryPhone = "2349050967182";

        let whatsappMessage =
`🧁 *NEW CUSTOMER MESSAGE*%0A%0A` +
`👤 Name: ${name}%0A` +
`📧 Email: ${email}%0A` +
`📞 Phone: ${phone}%0A%0A` +
`💬 Message:%0A${message}`;

        window.open(
            `https://wa.me/${bakeryPhone}?text=${whatsappMessage}`,
            "_blank"
        );

        contactForm.reset();

    });

}

 const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

}

/* ==========================================
   MOBILE DROPDOWN (TAP TO OPEN)
========================================== */

const dropdownToggle = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {

    dropdownToggle.addEventListener("click", (e) => {

        if (window.matchMedia("(max-width:990px)").matches) {

            e.preventDefault();

            dropdownMenu.classList.toggle("active");
            dropdownToggle.classList.toggle("open");

        }

    });

}

/* ==========================================
   TOUCH IMAGE EFFECTS (ZOOM / FADE)
========================================== */

if (window.matchMedia("(hover: none)").matches) {

    const touchCards = document.querySelectorAll(
        ".menu-box, .cake-card, .product-card, .gallery-item"
    );

    touchCards.forEach(card => {

        card.addEventListener("click", (e) => {

            const isLink = e.target.closest("a, button");

            if (isLink) return;

            const alreadyActive = card.classList.contains("active");

            touchCards.forEach(c => c.classList.remove("active"));

            if (!alreadyActive) {

                card.classList.add("active");

            }

        });

    });

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".menu-box, .cake-card, .product-card, .gallery-item")) {

            touchCards.forEach(c => c.classList.remove("active"));

        }

    });

}
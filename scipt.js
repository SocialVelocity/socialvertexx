// JavaScript source code
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

// ================================
// HEADER SCROLL EFFECT
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(11,17,32,0.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(11,17,32,.95)";
        header.style.boxShadow = "none";
    }

});

// ================================
// CONTACT FORM
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting SocialVertexX! We'll get back to you soon.");

    form.reset();

});

// ================================
// SCROLL ANIMATIONS
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});

// ================================
// HERO BUTTON EFFECT
// ================================

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("mouseenter",()=>{

    heroButton.style.transform="scale(1.05)";

});

heroButton.addEventListener("mouseleave",()=>{

    heroButton.style.transform="scale(1)";

});

// ================================
// CURRENT YEAR
// ================================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} SocialVertexX. All Rights Reserved.`;
// Hamburger Menu

const hamburger = document.querySelector(".hamburgerMenu");
const nav = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach(link => 
link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}));
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


// Carousel

const track = document.querySelector(".carouselTracker");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carouselButtonLeft");
const nextButton = document.querySelector(".carouselButtonRight");
const dotsNav = document.querySelector(".carouselNav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");
}


// On click, move to previous slide
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})

// On click, move to next slide
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
})

// On nav indicator click, move to that slide

dotsNav.addEventListener("click", e => {
    // Which indicator was clicked on
    const targetDot = e.target.closest("button");

    if(!targetDot) return;

    const currentSlide = track.querySelector(".currentSlide");
    const currentDot = dotsNav.querySelector(".currentIndicator");
    const targetIndex = dots.findIndex((dot) => {
        return dot === targetDot;
    })

    console.log(targetIndex);
    console.log(dots);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
})
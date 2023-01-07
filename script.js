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

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("currentIndicator");
    targetDot.classList.add("currentIndicator");
}


// On click, move to previous slide
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".currentIndicator");
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

// On click, move to next slide
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".currentIndicator");
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
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
    updateDots(currentDot, targetDot);
})
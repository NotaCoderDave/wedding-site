// JavaScript for slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

// Initial slide display
slides[currentSlide].style.opacity = 1;

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

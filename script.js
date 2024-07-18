// JavaScript for slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initial slide display
slides[currentSlide].classList.add('active');

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

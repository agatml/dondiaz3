const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.add('active');
}

showNextSlide();

setInterval(showNextSlide, 2500); 
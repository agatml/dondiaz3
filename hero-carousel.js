const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

// ativa o primeiro slide imediatamente
slides[currentIndex].classList.add('active');

setInterval(() => {
  slides[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.add('active');
}, 2500);

// Automatic Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slideshow .slide');

function showSlide() {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlide, 5000); // 5 seconds

// Modal pop-up
const joinNowBtn = document.getElementById('joinNowBtn');
const joinModal = document.getElementById('joinModal');
const closeModal = document.getElementById('closeModal');

joinNowBtn.addEventListener('click', () => {
  joinModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  joinModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === joinModal) {
    joinModal.style.display = 'none';
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

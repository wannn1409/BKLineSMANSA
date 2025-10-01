// === NAVIGASI SECTION ===
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    if (sec.id === id) sec.classList.add('active');
    else sec.classList.remove('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openNews(newsId) {
  showSection(newsId);
}

// === SLIDER GALERI ===
let currentSlide = 0;

function showSlide(index) {
  const slider = document.getElementById("galeriSlider");
  const totalSlides = slider.children.length;

  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto slide tiap 5 detik
setInterval(() => {
  nextSlide();
}, 5000);

// === INIT ===
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});

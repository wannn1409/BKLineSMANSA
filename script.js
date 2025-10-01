// === NAVIGASI SECTION ===
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    if (sec.id === id) sec.classList.add('active');
    else sec.classList.remove('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === SLIDER GALERI ===
let currentCard = 0;

function showCard(index) {
  const slider = document.getElementById("cardSlider");
  const totalCards = slider.children.length;

  if (index >= totalCards) currentCard = 0;
  else if (index < 0) currentCard = totalCards - 1;
  else currentCard = index;

  const offset = -currentCard * 270; // lebar card + margin
  slider.style.transform = `translateX(${offset}px)`;

  // update indikator
  document.getElementById("slideIndicator").innerText =
    (currentCard + 1).toString().padStart(2, "0");
}

function nextCard() { showCard(currentCard + 1); }
function prevCard() { showCard(currentCard - 1); }

document.addEventListener("DOMContentLoaded", () => {
  showCard(0);
});

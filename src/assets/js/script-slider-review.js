const cards = document.querySelectorAll('.card-review');
const dots = document.querySelectorAll('.dots-btn');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;
const timeToSkip = 5000;

function showSlide(i) {
  cards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.checked = false);

  cards[i].classList.add('active');
  dots[i].checked = true;
}

const intervalSlide = setInterval(() => {
  showSlide(index);
  index++
  if (index > cards.length - 1) {
    index = 0;
  }
}, timeToSkip);


next.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener('change', () => {
    index = i;
    showSlide(index);
  });
});

// Eventos do carrossel com Touch Event
const carrossel = document.querySelector(".carrossel-track");

let startY = 0;

carrossel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: true });

function handSwipe(){
  const distanceX = endX - startX;
  const distanceY = Math.abs(e.changedTouches[0].clientY - startY);

  const minSwipe = 50;

  if (Math.abs(distanceX) > distanceY) {
    if (distanceX > minSwipe){
      prevSlide();
    } else if (distanceX < -minSwipe) {
      nextSlide();
    }
  }
}


showSlide(0);
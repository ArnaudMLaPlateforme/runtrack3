// Burger menu
document.addEventListener("DOMContentLoaded", function() {
  const burgerBtn = document.getElementById('burger-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
  });
});

// Carousel
const carousel = document.querySelector('#carousel > div');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let scrollAmount = 0;
    const cardWidth = 320; // 

    next.addEventListener('click', () => {
        scrollAmount += cardWidth;
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prev.addEventListener('click', () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

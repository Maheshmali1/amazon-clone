
const scrollContainer = document.getElementById('scroll-container');

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const scrollAmt = 1300;

const scrollToTopBtn = document.getElementById('scroll-to-top-btn');


leftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy(
      {
          left: -scrollAmt,
          behavior:'smooth'
      }
  )
});

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy(
        {
            left: scrollAmt,
            behavior:'smooth'
        }
    )
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
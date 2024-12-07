
const scrollContainer = document.getElementById('scroll-container');

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const scrollAmt = 1300;



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
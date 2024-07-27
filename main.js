const toggleClick = document.querySelector(`.toggleBox`);
const container = document.querySelector(`.container`);
toggleClick.addEventListener(`click`, () => {
  toggleClick.classList.toggle(`active`);
  container.classList.toggle(`active`);
});

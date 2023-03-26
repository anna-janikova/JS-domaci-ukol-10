const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
};

let value = Number(document.querySelector(".counter__value").textContent)
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value += 1;
    updateCounter(value);
    console.log("button up " + value)
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
    console.log("button down " + value)
  }
});

updateCounter(value);
const valueElement = document.getElementById("value");

let counterValue = 0;


function updateCounter(newValue) {
  counterValue = newValue;
  valueElement.textContent = counterValue;
}

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');


incrementButton.addEventListener("click", () => {
  updateCounter(counterValue + 1);
});

decrementButton.addEventListener("click", () => {
  updateCounter(counterValue - 1);
});

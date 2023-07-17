const numberValue = document.getElementById('value');
const decrementBtn = document.querySelector
  ('button[data-action="decrement"]');
const incrementBtn = document.querySelector
  ('button[data-action="increment"]');

let currentValue = 0;

incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  numberValue.textContent = currentValue;
});
decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  numberValue.textContent = currentValue;
});
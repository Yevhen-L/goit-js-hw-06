const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const enteredValue = validationInput.value;
  const expectedLength = validationInput.getAttribute('data-length');

  if (enteredValue.length === parseInt(expectedLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}); 
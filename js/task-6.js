const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', onBlurChange);

function onBlurChange() {
    const characterQuantity = Number(inputValidation.getAttribute('data-length'));
    const inputLength = inputValidation.value.length;
    if (inputLength === characterQuantity) {
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.add('invalid');
    }
};
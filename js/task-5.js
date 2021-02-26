const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', inputChange);

function inputChange(event) {
    if (inputName.value === '') {
        outputName.innerHTML = 'незнайомець';
    } else {
        outputName.innerHTML = event.currentTarget.value;
    };
};
const counterValue = document.querySelector('#value');
let value = 0;
const decreaseBtn = document.querySelector('[data-action="decrement"]');

const decreaseValue = () => {
    value -= 1;
    counterValue.innerHTML = value;
};
decreaseBtn.addEventListener('click', decreaseValue);

const increaseBtn = document.querySelector('[data-action="increment"]');


const increaseValue = () => {
    value += 1;
    counterValue.innerHTML = value;
};
increaseBtn.addEventListener('click', increaseValue);
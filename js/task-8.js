const numberOfBoxes = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');


destroy.addEventListener('click', removeBoxes);
numberOfBoxes.addEventListener('input', onInputValue);
render.addEventListener('click', () => createBoxes(boxQuantity));



let boxQuantity = 0;

function onInputValue(event) {
    boxQuantity = event.currentTarget.value;
    console.log(boxQuantity);

    return boxQuantity;
};

console.log(boxQuantity);

const amount = boxQuantity;

function createBoxes(amount) {
    if (amount >= 1) {
        let width = 30;
        let height = 30;
        const arrayBoxes = [];
        for (let i = 1; i <= amount; i += 1) {
            const box = document.createElement('div');
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            box.style.width = `${width}px`;
            box.style.height = `${height}px`;
            box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
            arrayBoxes.push(box);
            width += 10;
            height += 10;
        }
        boxes.append(...arrayBoxes);
    };
};

function removeBoxes() {
    boxes.innerHTML = '';
};


/* function removeBoxes() { 
    boxes.remove(); //не можна, бо видаляє повністю весь вузол!!! 
};  */
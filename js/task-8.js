// Я це завдання так і не зробив. може підкажете, що не так.
// НЕ можу зрозуміти, як тут передати результат функції назовні чи навпаки,аргумент у функцію.


const numberOfBoxes = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');

const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');

render.addEventListener('click', createBoxes);
destroy.addEventListener('click', removeBoxes);
numberOfBoxes.addEventListener('input', onValueInput);

let boxesQuantity = 0;

//numberOfBoxes.value = amount ???????;
/* const amount = boxesQuantity;
console.log(amount); */

function onValueInput(event) {
    boxesQuantity = Number(event.target.value);
    console.log(boxesQuantity);

    if (boxesQuantity >= 1 && boxesQuantity <= 100) {
        console.log(boxesQuantity);
        return boxesQuantity;
    }
};


function createBoxes(amount) {

    const box = document.createElement('div');

    let width = 30;
    let height = 30;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;

    if (amount === 1) {
        boxes.append(box);
    };
    if (amount >= 1) {
        for (let i = 1; i <= amount; i += 1) {
            width += 10;
            height += 10;
            boxes.append(box);
        }

    };

};



function removeBoxes() {
    boxes.remove();
};
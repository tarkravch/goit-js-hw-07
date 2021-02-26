const fontController = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');


fontController.addEventListener('input', onRangeChange);

function onRangeChange() {
    const controllValue = fontController.value;
    console.log(controllValue);
    textToChange.style.fontSize === controllValue;

    /* textToChange.classList.add(`current-font=${controllValue}`); */


};
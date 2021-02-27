const fontController = document.querySelector('#font-size-control');

fontController.addEventListener('input', onRangeChange);

function onRangeChange() {
    const controllValue = fontController.value;
    console.log(controllValue);

    document.querySelector('#text').style.fontSize = `${controllValue}px`;

};
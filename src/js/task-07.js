const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');

inputElem.addEventListener('input',onInputRange)

function onInputRange(element) {
    spanElem.style.fontSize = `${element.currentTarget.value}px`
    console.log(element.currentTarget.value)
}


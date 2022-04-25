
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const decrementAction = () => {
       counterValue -=1
    value.textContent = counterValue;
}

const incrementAction = () => {
    counterValue +=1
    value.textContent = counterValue;
}

decrement.addEventListener('click', decrementAction);
increment.addEventListener('click', incrementAction);



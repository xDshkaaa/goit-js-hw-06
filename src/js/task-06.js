



// const inputEl = document.querySelector('#validation-input');
//     inputEl.addEventListener('blur', function () {
//   if (this.dataset.length === this.value.length) {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   } else {
//     this.classList.add('invalid');
//   };
// });


const inputElem = document.querySelector('#validation-input');
    inputElem.addEventListener('blur', onBlurInput );


 function onBlurInput () {
   if (this.dataset.length === this.value.length) {
    this.classList.add('valid');
     this.classList.remove('invalid');

  } else {
    this.classList.add('invalid');
  };
}


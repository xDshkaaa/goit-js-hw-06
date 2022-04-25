
const formElem = document.querySelector(".login-form");

formElem.addEventListener('submit', element => {
  element.preventDefault();
  const {elements: { email, password }} = element.currentTarget;
    email.value === '' || password.value === '' ? alert('Поля мають бути заповнені') : console.log(`email: ${email.value}, password: ${password.value}`);
    
       formElem.reset();
});
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', getData);
form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

function handlerInput() {
  const userData =
    {
      email: form.elements.email.value || '',
      message: form.elements.message.value || '',
    } || {};
  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
}

function getData() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
  } 


function handlerSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  localStorage.removeItem(LOCAL_KEY);
  // event.curentTarget.reset();
  form.elements.email.value = '';
  form.elements.message.value = '';
}

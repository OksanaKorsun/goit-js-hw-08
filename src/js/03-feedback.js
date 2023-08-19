import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const userData = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {};

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);
// document.addEventListener('DOMContentLoaded', saveInput)

form.elements.email.value = userData.email || '';
form.elements.message.value = userData.message || '';

function handlerInput(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
}

function handlerSubmit(event) {
  event.preventDefault();
  console.log(userData);
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}
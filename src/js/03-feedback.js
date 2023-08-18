import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;
const messageInput = form.elements.message;
const feedback = {
  email: emailInput.value,
  message: messageInput.value,
};

console.log(feedback);
console.log(form);

form.addEventListener('input', throttle(handlerInput, 500));
const LOCAL_KEY = 'feedback-form-state';
function handlerInput() {
  localStorage.setItem(LOCAL_KEY, feedback);
}

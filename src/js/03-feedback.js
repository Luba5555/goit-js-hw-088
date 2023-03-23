import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

console.log(localStorage);

function saveFormEls() {
localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailInput.value, message: messageInput.value }));
}

form.addEventListener('input', saveFormEls);


function parsedformEls() {
    const formElsStr = localStorage.getItem('feedback-form-state');
    if (formElsStr) {
    const { email, message } = JSON.parse(formElsStr);
    emailInput.value = email;
    messageInput.value = message;
    console.log({ email, message });
  }
} 

document.addEventListener('DOMContentLoaded', parsedformEls);

function onSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  emailInput.value = '';
  messageInput.value = '';
  const email = emailInput.value;
  const message = messageInput.value;
  console.log({ email, message });

}

const throttleonSubmit = throttle(onSubmit, 500);

form.addEventListener('submit', throttleonSubmit);
import debounce from 'lodash.debounce';
import 'animate.css';
import { postRequest } from './portfolio-api-service.js';
import disableScroll from 'disable-scroll';

const form = document.querySelector('.footer__form');
const comments = document.querySelector('input[name="comment"]');
const email = document.querySelector('input[name="email"]');
const isValid = document.querySelector('.footer__form--is-valid');
const loader = document.querySelector('.loader');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const maxLength = 33;
let originalString = '';

email.addEventListener('input', debounce(checkValidity, 300));
comments.addEventListener('input', inputEnough);
comments.addEventListener('blur', inputBlur);
comments.addEventListener('focus', inputFocus);
form.addEventListener('submit', onSubmit);
backdrop.addEventListener('click', onBackdropClick);

function checkValidity(e) {
  toggleValids(e);
  checkIsEmailEmpty();
}

function checkIsEmailEmpty() {
  if (email.value.length <= 0) {
    isValid.textContent = '';
  }
}

function inputEnough(e) {
  originalString = e.target.value;
}

function inputBlur(e) {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.substring(0, maxLength) + '...';
  }
}

function inputFocus(e) {
  e.target.value = originalString;
}

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);

  loader.classList.remove('is-hidden');
  postRequest(Object.fromEntries(formData))
    .then(res => {
      loader.classList.add('is-hidden');

      modal.innerHTML = makeModalContent(res.data);
      toggleModal();
      disableScroll.on();
      window.addEventListener('keydown', closeByEscape);
      addCloseBtnEventListener();
    })
    .catch(err => {
      modal.innerHTML = makeModalContent({ title: 'Error' });
      addCloseBtnEventListener();
      toggleModal();
    });

  resetValues();
}

function closeByEscape(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function toggleValids(e) {
  if (e.target.checkValidity()) {
    isValid.classList.add('footer__form--valid');
    isValid.classList.remove('footer__form--invalid');
    isValid.textContent = 'Success';
  } else {
    isValid.classList.remove('footer__form--valid');
    isValid.classList.add('footer__form--invalid');
    isValid.textContent = 'Invalid email, try again';
  }
}

function toggleModal() {
  backdrop.classList.toggle('is-hidden--modal');
  modal.classList.toggle('animate__bounceInRight');
  modal.classList.toggle('backdrop__modal__animation');
}

function resetValues() {
  email.value = '';
  comments.value = '';
  isValid.textContent = '';
  originalString = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function closeModal() {
  toggleModal();
  outModal();
  modal.addEventListener('animationend', outModalAndDeleteEventListeners);
  disableScroll.off();
  window.removeEventListener('keydown', closeByEscape);
}

function makeModalContent({ title, message }) {
  return `<div class="backdrop__modal__content">
        <svg width="24" height="24" class="modal__close-icon">
          <use href="../img/sprite.svg#icon-x"></use>
        </svg>
        <h4>${title}</h4>
        ${message ? `<p>${message}</p>` : ''}
      </div>`;
}

function outModalAndDeleteEventListeners() {
  outModal();
  modal.removeEventListener('animationend', outModalAndDeleteEventListeners);
}

function outModal() {
  backdrop.classList.toggle('is-hidden--modal');
  modal.classList.toggle('animate__bounceOutRight');
  modal.classList.toggle('backdrop__modal__out__animation');
}

function addCloseBtnEventListener() {
  const closeBtn = document.querySelector('.modal__close-icon');
  closeBtn.addEventListener('click', closeModal);
}

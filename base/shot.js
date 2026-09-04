'use strict';

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');
const giftForm = document.querySelector('#gift-form');
const formStatus = document.querySelector('#form-status');

const setMenuOpen = (isOpen) => {
  if (!navToggle || !primaryNav) return;

  primaryNav.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
};

navToggle?.addEventListener('click', () => {
  setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

primaryNav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || navToggle?.getAttribute('aria-expanded') !== 'true') return;
  setMenuOpen(false);
  navToggle.focus();
});

giftForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!giftForm.checkValidity()) {
    formStatus.textContent = 'Lütfen geçerli bir e-posta adresi gir.';
    formStatus.className = 'form-status is-error';
    giftForm.reportValidity();
    return;
  }

  formStatus.textContent = 'Form arayüzü hazır. Gerçek gönderim için bir e-posta servisi bağlanmalı.';
  formStatus.className = 'form-status is-success';
  giftForm.reset();
});

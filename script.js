'use strict';

const OpenButton = document.querySelectorAll('.show-modal');
const CloseModal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// console.log(OpenButton);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < OpenButton.length; i++) {
  OpenButton[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

CloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

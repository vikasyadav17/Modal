'use strict';
const show = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < show.length; i++) {
  show[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

close.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

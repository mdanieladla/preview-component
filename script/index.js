'use strict';
//*****************active for mobile ******************//
const normalDiv = document.querySelector('.js-normal');

const activeDiv = document.querySelector('.js-active');

const shareBtn = document.querySelectorAll('.js-btn');

function handleClickBtn() {
  if (activeDiv.classList.contains('hidden')) {
    activeDiv.classList.toggle('hidden');
    normalDiv.classList.toggle('hidden');
  } else {
    activeDiv.classList.toggle('hidden');
    normalDiv.classList.toggle('hidden');
  }
}

shareBtn.forEach((n) => n.addEventListener('click', handleClickBtn));

'use strict';
// //*****************active for mobile ******************//
// const normalDiv = document.querySelector('.js-normal');

// const activeDiv = document.querySelector('.js-active');

// const shareBtn = document.querySelectorAll('.js-btn');

// function handleClickBtn() {
//   if (activeDiv.classList.contains('hidden')) {
//     activeDiv.classList.toggle('hidden');
//     normalDiv.classList.toggle('hidden');
//   } else {
//     activeDiv.classList.toggle('hidden');
//     normalDiv.classList.toggle('hidden');
//   }
// }

// shareBtn.forEach((n) => n.addEventListener('click', handleClickBtn));

//store .share and .share-img in variables
const shareHtml = document.querySelector('.js-share');

const shareIcon = document.querySelector('.js-share-img');

//listen for click on icon
shareIcon.addEventListener('click', (ev) => {
  //within listener
  //show/hide correct share menu
  //avoid shutting the sahre popup when clicking on it
  if (ev.target === shareIcon) {
    if (window.innerWidth <= 750) {
      shareHtml.classList.toggle('active-share-mobile');
      return;
    }
    shareHtml.classList.toggle('active-share-desktop');
  }
});

'use strict';
//Traemos del HTML lso divs de share y share-img.
const shareHtml = document.querySelector('.js-share');

const shareIcon = document.querySelector('.js-share-img');

//Escuchamos el click en el icono
shareIcon.addEventListener('click', (ev) => {
  //Dentro del listener
  //Mostramos/cerramos el share menu correcto
  //evitando cerrar el share popup cuando clickamos en el
  if (ev.target === shareIcon) {
    //Comprobamos el ancho de la ventana actual
    if (window.innerWidth <= 750) {
      shareHtml.classList.toggle('active-share-mobile');
      //si esto es verdad no queremos que el resto de la función siga funcionando asi que necesitamos devolverlo fuera
      return;
    }
    shareHtml.classList.toggle('active-share-desktop');
  }
});

'use strict';

import style from "../assets/styles/global.scss";

require ('./cookies.js');

$('#navbarDropdownMenuLink').on('click',function(){
// lorsque l'on clic sur l'élément "Know more" du 'navbarDropdownMenuLink'
  $('#navbarDropdownMenu').toggleClass('show');
// Alors cela va nous afficher les 3 éléments du 'navbarDropdownMenu'
});

document.getElementById('js-current-year').appendChild(document.createTextNode(new Date().getFullYear()))

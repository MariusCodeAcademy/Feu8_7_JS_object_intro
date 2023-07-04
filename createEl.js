'use strict';
console.log('createEl.js file was loaded');

// pakeisti h1 teksta
// #mainTitle - css selectorius
// sukuriau nuoroda i h1 elementa
const h1El = document.getElementById('mainTitle');
console.log('h1El ===', h1El);
// pakeisti teksta
h1El.innerText = 'Dom manipulation';

// padaryti didziosom raidem

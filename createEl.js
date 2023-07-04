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
// h1El.style.textTransform = 'lowercase';
h1El.textContent = h1El.textContent.toUpperCase();

// Naujo elemento sukurimas ===========

// 1. sukurti elementa ir prisilyginti kintamajam
// 2. prideti texta
// 2a. prideti klase
// 3. patalpinti elementa DOM (mount)

// 1. sukurti h4 elementa ir prisilyginti kintamajam
const h4El = document.createElement('h4');
// 2. prideti texta 'as naujas'
h4El.textContent = 'as naujas';
console.log('h4El ===', h4El);
// 2a. prideti klase
// 3. patalpinti elementa DOM (mount) div#app
// document.body.append(h4El);
// kur.apend(ka)
const appEl = document.getElementById('app');
console.log('appEl ===', appEl);
appEl.append(h4El);

// <!-- sukurti div -->
//   <!-- prideti d i DOM -->
//   <div>
//     <!-- sukurti h3 -->
//     <!-- prideti texta i h3 -->
//     <!-- prideti h3 i div -->
//     <h3>Antraste</h3>
//     <!-- sukurti p -->
//     <!-- prideti texta i p -->
//     <!-- prideti p i div -->
//     <p>Lorem, ipsum dolor.</p>
//   </div>

// const divEl = document.createElement('div');
// document.body.append(divEl);
// const h3El = document.createElement('h3');
// h3El.textContent = 'Antraste';
// // kur.apend(ka)
// divEl.append(h3El);
// console.log('divEl ===', divEl);

// const pEl = document.createElement('p');
// pEl.textContent = 'Lorem, ipsum dolor.';
// divEl.append(pEl);

function makeAHtml() {
  const divEl = document.createElement('div');
  document.body.append(divEl);
  const h3El = document.createElement('h3');
  h3El.textContent = 'Antraste';
  // kur.apend(ka)
  divEl.append(h3El);
  console.log('divEl ===', divEl);

  const pEl = document.createElement('p');
  pEl.textContent = 'Lorem, ipsum dolor.';
  divEl.append(pEl);
}

// sukurti ul sarasa is masyvo elementu
const colorsArr = ['red', 'green', 'blue', 'tomato'];
{
  /* <ul>
      <li>red</li>
      <li>green</li>
      <li>blue</li>
      <li>tomato</li>
    </ul> */
}
// kuriam sarasa
const ulEl = document.createElement('ul');
// kuriam elementus
const liEl1 = document.createElement('li');
liEl1.textContent = colorsArr[0];
liEl1.style.backgroundColor = colorsArr[0];
ulEl.append(liEl1);
// kuriam elementus
const liEl2 = document.createElement('li');
liEl2.textContent = colorsArr[1];
liEl2.style.backgroundColor = colorsArr[1];
ulEl.append(liEl2);
console.log('ulEl ===', ulEl);

// patalpinti ul i DOM (document.body.append)

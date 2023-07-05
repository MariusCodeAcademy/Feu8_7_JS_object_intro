'use strict';
console.log('pr.js file was loaded');

/* 
<article>
  <h3>JS</h3>
  <p>2023 07 04</p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?
  </p>
</article>
*/

// sukurti article
const articleEl = document.createElement('article');
articleEl.className = 'card';
// document.body.append(articleEl);
console.log('articleEl ===', articleEl);

// // sukurti h3
// const h3El = document.createElement('h3');
// // prideti text
// h3El.textContent = 'JS';
// // ideti h3 i article
// articleEl.append(h3El);

// // sukurti p
// const pEl = document.createElement('p');
// // prideti text
// pEl.textContent = new Date();
// // ideti p i article
// articleEl.append(pEl);

// // sukurti p
// const textEl = document.createElement('p');
// // prideti text
// textEl.textContent =
//   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?';
// // ideti p i article
// articleEl.append(textEl);

// ideti article i DOM
document.body.append(articleEl);

function makeHtmlEl(tagName, text) {
  // sukurti h3
  const h3El = document.createElement(tagName);
  // prideti text
  h3El.textContent = text;
  // ideti h3 i article
  articleEl.append(h3El);
}

makeHtmlEl('h3', 'JS');
makeHtmlEl('p', new Date());
makeHtmlEl(
  'p',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?'
);

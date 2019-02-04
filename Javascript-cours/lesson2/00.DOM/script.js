'use strict';

// Trouvez les balises DIV du document
const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div')
console.log('myDivs2', myDivs2);
console.log();

const myParagraphs = document.getElementsByClassName('my-paragraphs');

const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('my-paragraphs')
const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('myDivs2 ')


const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2= document.getElementById('#js-unique-el');


const myParagraphsInDivs = document.querySelectorAllE('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs)

const.firstP = document.querySelector('p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text', firstP.innerText);

const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

myImg.className = 'my-img'; myImg.className += 'another-class';
myImg.classList.add = ('my-img');
myImg.classList.remove('my-img');

const parent = document.querySelector('div');
console.log('parent', parent);
const nodeToDelete = document.querySelector('div p');
console.log('nodeToDelete', nodeToDelete);
parent[0].removeChild(nodeToDelete);

const myBody = document.querySelector('body')
const newDiv = document.createElement('div')
newDiv.innerText = 'Hello!';
myBody.appendChild(newDiv);


const firstP = document.querySelector('p');
firstP.innerText = 'I am the first paragraph';

'use strict';
<<<<<<< HEAD
=======

>>>>>>> bb693b1a50062b4d66659383e85c40a88bf2b314
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
<<<<<<< HEAD
const btnScrollTo = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
  e.preventDefault();
=======

const openModal = function () {
>>>>>>> bb693b1a50062b4d66659383e85c40a88bf2b314
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

<<<<<<< HEAD
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
=======
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
>>>>>>> bb693b1a50062b4d66659383e85c40a88bf2b314

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
<<<<<<< HEAD
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// -----------------------05
// -------------------------Selecting, Creating, AND Deleting Elements

//Selecting
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// Creating, AND inserting

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we use cookies to improve funcnationality and analytics <button class= "btn btn--close--cookie" > Got iT </button>';

const header = document.querySelector('.header');
header.append(message);
header.after(message);

// Deleting Elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// -----------------------06
// -------------------------Style, Attributes And Classes
// Style
message.style.backgroundColor = '#37383d';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt)
// console.log(logo.className)

// Non-Standard

const link = document.querySelector('.twitter-link');
// console.log(link.href)
// console.log(link.getAttribute('href'))
const btnlink = document.querySelector('.nav__link--btn');
// console.log(btnlink.href)
// console.log(btnlink.getAttribute('href'))

//Classes
// console.log(logo.classList.add('c', 'j'))
// console.log(logo.classList.remove('c'))
// console.log(logo.classList.toggle('c'))
// console.log(logo.classList.contains('c','j'))

// -----------------------07
// -------------------------Implementing Smooth Scrooling
const section1 = document.querySelector('#section--1');
// e.preventDefault()
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
  // old way
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //  left: s1coords.left + window.pageXOffset,
  //  top:  s1coords.top + window.pageYOffset,
  //  behavior: "smooth"
  // })
});

// -----------------------08
// -------------------------Types of Events & Event Handlers
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are Reading the Heading :D')
//   h1.removeEventListener('mouseenter', alertH1)
// }
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter',  alertH1)
//
// h1.addEventListener('mouseleave', function (e) {
//   alert('addEventListener: Great! You are Leaving the Heading :D')
// })
//
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are Reading the Heading :D');
// };
//

// -----------------------09,10
// -------------------------Event Propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255) })`;


document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.background = randomColor(0, 255);
  // -------------------------Event Propagation
  // e.stopPropagation();
});
//
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.background = randomColor(0, 255);
});
// body color
// document.body.style.background = `linear-gradient(to right, ${randomColor(0,255)}, ${randomColor(0,255)}) `;
=======
});
>>>>>>> bb693b1a50062b4d66659383e85c40a88bf2b314

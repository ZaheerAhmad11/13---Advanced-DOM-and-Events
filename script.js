'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.twitter-link');
const btnlink = document.querySelector('.nav__link--btn');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log('Clicked', id);
//   });
// });

// Determind What element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
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

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'we use cookies to improve funcnationality and analytics <button class= "btn btn--close--cookie" > Got iT </button>';

// const header = document.querySelector('.header');
// header.append(message);
// header.after(message);

// Deleting Elements
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// -----------------------06
// -------------------------Style, Attributes And Classes
// Style
// message.style.backgroundColor = '#37383d';
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// console.log(logo.alt)
// console.log(logo.className)
// Non-Standard
// console.log(link.href)
// console.log(link.getAttribute('href'))
// console.log(btnlink.href)
// console.log(btnlink.getAttribute('href'))

//Classes
// console.log(logo.classList.add('c', 'j'))
// console.log(logo.classList.remove('c'))
// console.log(logo.classList.toggle('c'))
// console.log(logo.classList.contains('c','j'))

// -----------------------07
// -------------------------Implementing Smooth Scrooling
// const section1 = document.querySelector('#section--1');
// e.preventDefault()
// btnScrollTo.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// old way
// const s1coords = section1.getBoundingClientRect();
// window.scrollTo({
//  left: s1coords.left + window.pageXOffset,
//  top:  s1coords.top + window.pageYOffset,
//  behavior: "smooth"
// })
// });

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
/* 
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.background = randomColor(0, 255);
-------------------------Event Propagation
e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.background = randomColor(0, 255);
});
body color
document.body.style.background = `linear-gradient(to right, ${randomColor(0,255)}, ${randomColor(0,255)}) `;
*/
// -----------------------11
// -------------------------Event Delegation implement Page Navigation
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//    el.addEventListener('click', function (e) {
//      e.preventDefault();
//      const id = this.getAttribute('href');
//      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//      console.log('Clicked', id);
//    });
//    });

//    // Determind What element originated the event
//    document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   //Matching Strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// -----------------------12
// -------------------------Dom Traversing
//Down Side
// const h1 = document.querySelector('h1');
// console.log(h1.parentElement);
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //Up Side
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'

// // Going Sideways
// console.log(h1.nextElementSibling)
// console.log(h1.previousElementSibling)
// -----------------------13
// -------------------------Building A Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);
  //Guard
  if (!clicked) return;

  //Remove Active Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active Tab
  clicked.classList.add('operations__tab--active');

  //Active Content Aarea
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

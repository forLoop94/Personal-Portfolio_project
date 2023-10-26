import projectData from "./projects_data.js";
import { cardsContainer, recurringCards } from "./recurring_cards.js";
import menuDisplay from "./mobile_menu.js";
import { uniqueCard, worksDesktop, workSection } from "./unique_card.js";
import loopButton from "./card_popup.js";

console.log(projectData);

// Mobile menu

const menuButton = document.querySelector('[data-menu]');
menuButton.addEventListener('click', menuDisplay);

uniqueCard();
worksDesktop();

recurringCards(projectData);
workSection.appendChild(cardsContainer);

const cardButton = document.querySelectorAll('.btn-type-b');
loopButton(cardButton, projectData);

// ...Email validation...

const email = document.querySelector('#e-mail');
const emailMob = document.querySelector('#e-mail-mob');
const messageMob = document.querySelector('.message-mob');
const messageDesk = document.querySelector('.message-desk');
const formDesktop = document.querySelector('.main-form');
const formMobile = document.querySelector('.form-mobile');
const mobileName = document.querySelector('.form-mobile input');
const desktopName = document.querySelector('.main-form input');
const mobileText = document.querySelector('.form-mobile textarea');
const desktopText = document.querySelector('.main-form textarea');

function isValid(str) {
  if (str.toLowerCase() !== str) {
    return false;
  }
  return true;
}

function emailToLowercsae(str) {
  return str.toLowerCase();
}

formDesktop.addEventListener('submit', (event) => {
  if (!isValid(email.value)) {
    messageDesk.textContent = 'Email must be in lowercase!';
    email.value = emailToLowercsae(email.value);
    event.preventDefault();
  } else {
    messageDesk.textContent = '';
  }
});

formMobile.addEventListener('submit', (event) => {
  if (!isValid(emailMob.value)) {
    messageMob.textContent = 'Email must be in lowercase!';
    emailMob.value = emailToLowercsae(emailMob.value);
    event.preventDefault();
  } else {
    messageMob.textContent = '';
  }
});

// ...portfolio-Preserve data in the browser...

formMobile.addEventListener('change', () => {
  const formDataMobile = {
    name: mobileName.value,
    email: emailMob.value,
    text: mobileText.value,
  };
  const stringifyFormDataMobile = JSON.stringify(formDataMobile);
  localStorage.setItem('mobileData', stringifyFormDataMobile);
});

formDesktop.addEventListener('change', () => {
  const formDataDesktop = {
    name: desktopName.value,
    email: email.value,
    text: desktopText.value,
  };
  const stringifyFormDataDesktop = JSON.stringify(formDataDesktop);
  localStorage.setItem('desktopData', stringifyFormDataDesktop);
});

const storedMobileData = JSON.parse(localStorage.getItem('mobileData'));
const storedDesktopData = JSON.parse(localStorage.getItem('desktopData'));

window.addEventListener('load', () => {
  // Check if the form data object is found in localStorage
  if (storedMobileData) {
    mobileName.value = storedMobileData.name;
    emailMob.value = storedMobileData.email;
    mobileText.value = storedMobileData.text;
  }
  if (storedDesktopData) {
    desktopName.value = storedDesktopData.name;
    email.value = storedDesktopData.email;
    desktopText.value = storedDesktopData.text;
  }
});

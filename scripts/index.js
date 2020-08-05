import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { toggleModalWindow } from './util.js';

// Wrappers
const editProfileModalWindow = document.querySelector('.modal_type_editProfile');
const addCardModalWindow = document.querySelector('.modal_type_addCard');
const form = document.querySelector('.form'); 

// Buttons and other DOM elements
const profileEditBtn = document.querySelector('.profile__editBtn');
const addBtn = document.querySelector('.profile__addBtn');

const editProfileCloseBtn = editProfileModalWindow.querySelector('.modal__closeBtn');
const addCardCloseBtn = addCardModalWindow.querySelector('.modal__closeBtn');
const openImgCloseBtn = openImgModalWindow.querySelector('.modal__closeBtn');

const profileName = document.querySelector('.profile__heading');
const profileOccupation = document.querySelector('.profile__occupation');

// Form data 
const inputName = document.querySelector('.form__item_el_name');
const inputOccupation = document.querySelector('.form__item_el_occupation');


const defaultConfig = {
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error'
}

const addCardForm = document.querySelector('.form__type_add');
const editProfileForm = document.querySelector('.form__type_edit');

const editProfileValidator = new FormValidator(defaultConfig, editProfileForm);
const addCardValidator = new FormValidator(defaultConfig, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

// The values of the input should be the same as the profile text
function formSubmitHandler(evt) {
  evt.preventDefault(); //prevent automatic refresh of the page on submit
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  // Close modal after click on submit
  toggleModalWindow(editProfileModalWindow);
  form.reset();
} 

// Connect the handler to the form:
form.addEventListener('submit', formSubmitHandler);

// Edit btn events 
profileEditBtn.addEventListener('click', () => {
    // Open modal
  toggleModalWindow(editProfileModalWindow);
});
editProfileCloseBtn.addEventListener('click', () => {
    // Close modal
  toggleModalWindow(editProfileModalWindow);
});

// AddBtn events 
addBtn.addEventListener('click', () => {
  toggleModalWindow(addCardModalWindow);
});
addCardCloseBtn.addEventListener('click', () => {
  toggleModalWindow(addCardModalWindow);
});

// Close btn for openImg 
openImgCloseBtn.addEventListener('click', () => {
  toggleModalWindow(openImgModalWindow);
});



const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const cardTemplateSelector = '.card-template';
const list = document.querySelector('.elements__container');

const renderCard = (data) => {
  const card = new Card(data, cardTemplateSelector);
  
  // Prepend the result of the function
  return list.prepend(card.generateCard());
};

initialCards.forEach(data => renderCard(data));

const addName = document.querySelector('.form__item_el_title');
const addUrl = document.querySelector('.form__item_el_url');

addCardModalWindow.addEventListener('submit', (evt) => {
  evt.preventDefault(); 

  const data = {name: addName.value, link: addUrl.value};
  renderCard(data);

  addName.value = "";
  addUrl.value = "";

  // Lastly, close the modal window
  toggleModalWindow(addCardModalWindow);
});
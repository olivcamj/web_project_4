import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { toggleModalWindow, openImgModalWindow, form } from './util.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// Wrappers
const editProfileModalWindow = document.querySelector('.modal_type_editProfile');
const addCardModalWindow = document.querySelector('.modal_type_addCard');


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

//add new card data
const addName = document.querySelector('.form__item_el_title');
const addUrl = document.querySelector('.form__item_el_url');

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
const modalWithImage = new PopupWithImage(openImgModalWindow);


const defaultConfig = {
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error'
};

const addCardForm = document.querySelector('.form__type_add');
const editProfileForm = document.querySelector('.form__type_edit');


const cardSection = new Section({
    items: initialCards,
    renderer:(data) => {
      const card = new Card({
        data,  
        handleCardClick: () => {
        modalWithImage.open(data);
      }
    }, '.card-template')
      cardSection.addItem(card.generateCard());
  },
}, list)

cardSection.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  jobSelector: '.profile__occupation'
});


const addForm = new PopupWithForm({
  handleSubmitForm: () => {
    const newCard = new Card({
      data: {name: addName.value, link: addUrl.value},
      handleCardClick:(data) => {
        modalWithImage.open(data);
      }
    },  '.card-template');
    cardSection.addItem(newCard.generateCard())
    addForm.close();
  },
 
  popupSelector: addCardModalWindow,
})

addForm.setEventListeners();


const editForm = new PopupWithForm({
  handleSubmitForm: () => {
    userInfo.setUserInfo({name: inputName.value, job: inputOccupation.value})
  },
  popupSelector: editProfileModalWindow
});

editForm.setEventListeners();

profileEditBtn.addEventListener('click', () => {
  //editForm.open();
  userInfo.getUserInfo();
});


const editProfileValidator = new FormValidator(defaultConfig, editProfileForm);
const addCardValidator = new FormValidator(defaultConfig, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();


const editPopup = new Popup(editProfileModalWindow);
const addPopup = new Popup(addCardModalWindow);
const imgPopup = new Popup(openImgModalWindow);

// Edit btn events 
profileEditBtn.addEventListener('click', () => {
    // Open modal
    editPopup.open();
});
editProfileCloseBtn.addEventListener('click', () => {
    // Close modal
    editPopup.close();
});

// AddBtn events 
addBtn.addEventListener('click', () => {
  addPopup.open();
});
addCardCloseBtn.addEventListener('click', () => {
  addPopup.close();
});

// Close btn for openImg 
openImgCloseBtn.addEventListener('click', () => {
  imgPopup.close()
});

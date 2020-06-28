// Wrappers
const editProfileModalWindow = document.querySelector('.modal_type_editProfile');
const addCardModalWindow = document.querySelector('.modal_type_addCard');
const openImgModalWindow = document.querySelector('.modal_type_imgPopup');
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

function toggleModalWindow(modal) {
  modal.classList.toggle('modal_visible'); 
}

// The values of the input should be the same as the profile text
function formSubmitHandler(evt) {
  evt.preventDefault(); //prevent automatic refresh of the page on submit
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  // Close modal after click on submit
  toggleModalWindow(editProfileModalWindow);
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

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

const createCard = (data) => {
  
  const cardElement = cardTemplate.cloneNode(true);

  const cardHeartIcon = cardElement.querySelector('.card__heart-icon');
  const cardRemoveBtn = cardElement.querySelector('.card__removeBtn');
  const cardImg = cardElement.querySelector('.card__img');
  const cardTitle = cardElement.querySelector('.card__text');
  
  
  cardTitle.textContent = data.name;
  cardImg.style.backgroundImage = `url(${data.link})`;
  
  cardHeartIcon.addEventListener('click', (evt) => {
    // Change heart color
    evt.target.classList.toggle('card__heart-icon_active');
  });

  cardRemoveBtn.addEventListener('click', (evt) => {
    // Remove card
    evt.target.closest('.card').remove();
  });

  const openImageModal = () => {
    const cardPopupImg = openImgModalWindow.querySelector('.modal__img');
    const cardTitle = openImgModalWindow.querySelector('.modal__caption');

    cardPopupImg.src = data.link;
    cardPopupImg.alt = data.name;
    cardTitle.textContent = data.name;
  }

  cardImg.addEventListener('click', () => {
    // Open modal
    openImageModal(data)
    toggleModalWindow(openImgModalWindow);
  });
  
  return cardElement;
};

const list = document.querySelector('.elements__container');

const renderCard = (data) => {
  // Prepend the result of the function
  list.prepend(createCard(data));
};

initialCards.forEach((data) => {
   renderCard(data);
});

// Use to add click event on the 'add' form_btn  
const formAddCardBtn = addCardModalWindow.querySelector('.form__btn');

const addName = document.querySelector('.form__item_el_title');
const addUrl = document.querySelector('.form__item_el_url');

addCardModalWindow.addEventListener('submit', (evt) => {
  evt.preventDefault(); 

  renderCard({name: addName.value, link: addUrl.value});

  addName.value = "";
  addUrl.value = "";

  // Lastly, close the modal window
  toggleModalWindow(addCardModalWindow);
});
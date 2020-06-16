const editBtn = document.querySelector('.profile__editBtn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__closeBtn');
const form = document.querySelector('.form');
const inputName = document.querySelector('.form__item_el_name');
const inputOccupation = document.querySelector('.form__item_el_occupation');
const profileName = document.querySelector('.profile__heading');
const profileOccupation = document.querySelector('.profile__occupation');

function toggleModal() {
  modal.classList.toggle('modal_visible'); 
}

editBtn.addEventListener('click', () => {
  toggleModal();

  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
});
modalCloseBtn.addEventListener('click', toggleModal);

form.addEventListener('submit', (evt) =>{
  evt.preventDefault(); //prevent automatic refresh of page on submit

  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;

  toggleModal();
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


import './index.css';
import { 
    defaultConfig, 
    editProfileModalWindow, 
    addCardModalWindow, 
    openImgModalWindow,
    deleteCardModalWindow,
    profileEditBtn, 
    addBtn, 
    editProfileCloseBtn, 
    addCardCloseBtn, 
    openImgCloseBtn, 
    cardTemplateSelector,
    inputName,
    inputOccupation,
    list,
    addCardForm,
    editProfileForm,
    avatar,
    MYID
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const modalWithImage = new PopupWithImage(openImgModalWindow);

const deleteForm = new PopupWithForm({
    handleSubmitForm: () => {},
    popupSelector: deleteCardModalWindow
})

deleteForm.setEventListeners();

function creatingCardInfo(data) {
    const card = new Card({
        data,
        handleCardClick: () => {
            modalWithImage.open(data);  
        },
        handleDeleteClick: (cardId) => {           
            deleteForm.setDeleteHandler(() => {
                api.deleteCard(cardId);
                card.deleteCard();
                deleteForm.close();
            });
            deleteForm.open();
        },
        handleDeleteIcon: () => {
            if (MYID !== data.owner._id) {
                card.hideRemoveBtn();
            }}
    }, cardTemplateSelector);
    return card;
}


const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-4",
    headers: {
        authorization: "072f7e25-49ec-4ac7-aa51-bf0613ff728e",
        "Content-Type": "application/json"
    }
});

api.getInitialCards()
    .then(res => { 
        const cardSection = new Section({
            items: res,
            renderer:(data) => {
                const card = creatingCardInfo(data);
                cardSection.addItem(card.generateCard());
        },
        }, list);
        
        cardSection.renderItems();

        const addForm = new PopupWithForm({
            handleSubmitForm: (data) => {
                api.addCard(data)
                    .then(res => {
                        const newCard = creatingCardInfo(res);     
                        cardSection.addItem(newCard.generateCard());
                        addForm.close();
                    }) 
            },
            popupSelector: addCardModalWindow
        }); 
        addForm.setEventListeners();
     // AddBtn events 
    addBtn.addEventListener('click', () => {
        addForm.open();
    });
    addCardCloseBtn.addEventListener('click', () => {
        addForm.close();
    });
})


const userInfo = new UserInfo({
    nameSelector: '.profile__heading',
    jobSelector: '.profile__occupation'
});


api.getUserInfo()
    .then(res => {
        console.log('profile!!', res)
        userInfo.setUserInfo({ name: res.name, job: res.about })
        avatar.src = res.avatar;
    })


const editForm = new PopupWithForm({
    handleSubmitForm: () => {
        userInfo.setUserInfo({name: inputName.value, job: inputOccupation.value})
    },
    popupSelector: editProfileModalWindow
});

editForm.setEventListeners();

const editProfileValidator = new FormValidator(defaultConfig, editProfileForm);
const addCardValidator = new FormValidator(defaultConfig, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

profileEditBtn.addEventListener('click', () => {
    editForm.open();
});
editProfileCloseBtn.addEventListener('click', () => {
    // Close modal
    editForm.close();
});



const imgPopup = new Popup(openImgModalWindow);
// Close btn for openImg 
openImgCloseBtn.addEventListener('click', () => {
    imgPopup.close()
});

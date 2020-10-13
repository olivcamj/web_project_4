import './index.css';
import { 
    defaultConfig, 
    editProfileModalWindow, 
    addCardModalWindow, 
    openImgModalWindow,
    deleteCardModalWindow,
    setUserAvatarModalWindow,
    profileEditBtn, 
    addBtn, 
    setAvatarBtn,
    editProfileCloseBtn, 
    addCardCloseBtn, 
    openImgCloseBtn, 
    cardTemplateSelector,
    formSave,
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
function renderLoading(isLoading) {
        if (isLoading) {
            formSave.textContent += '...';
        } else {
            formSave.textContent = formSave.textContent.slice(0,-3);
        }
}
const setUserAvatar = new PopupWithForm({
    handleSubmitForm: (data) => {
            renderLoading(true);
            api.setUserAvatar(data.link)
                .then(res => {
                    avatar.src = data.link;
                    renderLoading(false);
                    setUserAvatar.close();
    })},
    popupSelector: setUserAvatarModalWindow
})

setUserAvatar.setEventListeners();
setAvatarBtn.addEventListener('click', () => {
    setUserAvatar.open();
});


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
            }},
        handleLikeCount: () => {
            if (data.likes.length > 0) {
                data.likes.forEach(element => {
                    if( element._id === MYID) {
                        card.renderLike();
                    }
                });
            }
        },
        handleLikeClick: (cardId) => {
            if (card.wasLiked() === false) {
                api.changeLikeStatus(cardId, true)
                .then(result => {
                    const count = result.likes.length;
                    card.like(count);
                })
            } else {
                api.changeLikeStatus(cardId, false)
                .then(result => {
                    const count = result.likes.length;
                    card.deleteLike(count);
                })
            }
        }
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
                renderLoading(true);
                api.addCard(data)
                    .then(res => {
                        const newCard = creatingCardInfo(res);  
                        renderLoading(false);   
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
    titleSelector: '.profile__occupation'
});


api.getUserInfo()
    .then(res => {
        console.log('profile!!', res)
        userInfo.setUserInfo({ name: res.name, title: res.about })
        avatar.src = res.avatar;
    })


const editForm = new PopupWithForm({
    handleSubmitForm: (data) => {
        renderLoading(true)
        api.editUserInfo(data)
        .then(res => {
            userInfo.setUserInfo(data)
            renderLoading(false)
            editForm.close()
        }) 
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

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
    addCardCloseBtn,  
    cardTemplateSelector,
    list,
    addCardForm,
    editProfileForm,
    avatar,
    MYID,
    inputName,
    inputOccupation
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
modalWithImage.setEventListeners();

const deleteForm = new PopupWithForm({
    handleSubmitForm: () => {},
    popupSelector: deleteCardModalWindow
});

deleteForm.setEventListeners();

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-4",
    headers: {
        authorization: process.env.API_KEY,
        "Content-Type": "application/json"
    }
});

api.getUserData()
    .then(([userData, res]) => { 
        const MYID = userData['_id'];
        
        const cardSection = new Section({
            items: res,
            renderer: (data) => {
                const renderCard = creatingCardInfo(data);
                cardSection.addItem(renderCard.generateCard());
        }
        }, list);
        
        cardSection.renderItems();

        const addForm = new PopupWithForm({
            handleSubmitForm: (data) => {
                renderLoading(true, addCardModalWindow);
                api.addCard(data)
                    .then((result) => {
                        const newCard = creatingCardInfo(result);
                        renderLoading(false, addCardModalWindow);
                        cardSection.addItem(newCard.generateCard());
                        addForm.close();
                    }).catch((err) => {
                        console.trace(err);
                        return new Error({ err });
                    })
            },
            popupSelector: addCardModalWindow
        }); 
        addForm.setEventListeners();
        
        addBtn.addEventListener('click', () => {
            addForm.open();
        });

        function renderLoading(isLoading, modal) {
            if (isLoading) {
                modal.querySelector('.form__btn').textContent = 'Saving...';
            } else {
                modal.querySelector('.form__btn').textContent = 'Save';
                //formSave.value = 'Save';
            }
        };

        const setUserAvatar = new PopupWithForm({
            handleSubmitForm: (data) => {
                    renderLoading(true, setUserAvatarModalWindow);
                    api.setUserAvatar(data.link)
                        .then(() => {
                            avatar.src = data.link;
                            renderLoading(false, setUserAvatarModalWindow);
                            setUserAvatar.close();
                        }).catch((err) => console.log(err))
            },
            popupSelector: setUserAvatarModalWindow
        });

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
                        api.deleteCard(cardId)
                        .then(() => {
                            card.deleteCard();
                            deleteForm.close();
                        }).catch((err) => console.log(err))   
                    });
                    deleteForm.open();
                },
                handleDeleteIcon: () => {
                    if (MYID !== data.owner._id) {
                        card.hideRemoveBtn();
                    };
                },
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
                        }).catch((err) => console.log(err))
                    } else {
                        api.changeLikeStatus(cardId, false)
                        .then(result => {
                            const count = result.likes.length;
                            card.deleteLike(count);
                        }).catch((err) => console.log(err))
                    };
                }
            }, cardTemplateSelector);
            return card;
        }

        const userInfo = new UserInfo({
            nameSelector: '.profile__heading',
            titleSelector: '.profile__occupation'
        });
        console.log('profile!!', userData) //DELETE ME
        //getUserInfo()
        userInfo.setUserInfo({name: userData.name, title: userData.about}) //{ name: userData.name, title: userData.about})
        avatar.src = userData.avatar;

        const editForm = new PopupWithForm({
            handleSubmitForm: (data) => {
                renderLoading(true, editProfileModalWindow);
                
                api.editUserInfo(data)
                .then(() => {
                    userInfo.setUserInfo(data);
                    renderLoading(false, editProfileModalWindow);
                    
                    editForm.close();
                    
                }).catch((err) => console.log(err))
            },
            popupSelector: editProfileModalWindow
        });

        editForm.setEventListeners();

        const editProfileValidator = new FormValidator(defaultConfig, editProfileForm);
        const addCardValidator = new FormValidator(defaultConfig, addCardForm);

        editProfileValidator.enableValidation();
        addCardValidator.enableValidation();

        profileEditBtn.addEventListener('click', () => { 
            const getFormInfo = userInfo.getUserInfo();
            inputName.value = getFormInfo.name;
            inputOccupation.value = getFormInfo.title;
            editForm.open();
        });
    })
.catch((err) => console.error(err));
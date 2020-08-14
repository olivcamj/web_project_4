import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({ link, name }) {
        this._popupElement.querySelector('.modal__img').src = link;
        this._popupElement.querySelector('.modal__caption').textContent = name;

        super.open();
    }

}   

export default PopupWithImage;
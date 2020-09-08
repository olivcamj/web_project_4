import Popup from './Popup.js';

class PopupWithImage extends Popup {

    open({ link, name }) {
        this._popupElement.querySelector('.modal__img').src = link;
        this._popupElement.querySelector('.modal__caption').textContent = name;

        super.open();
    }

}   

export default PopupWithImage;
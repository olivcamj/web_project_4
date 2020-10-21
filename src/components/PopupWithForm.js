import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor({ handleSubmitForm, popupSelector }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popupElement.querySelector('.form');
        this._popupElement = popupSelector;
        this._inputList = this._popupElement.querySelectorAll(".form__item");
    }

    _getInputValues() {
        //collects data from all the input fields.  
        //const inputList = Array.from(this._form.querySelectorAll('.form__item'));
        this._inputValues = {};
        this._inputList.forEach(input => {this._inputValues[input.name] = input.value});
        return this._inputValues;
    }

    setDeleteHandler(handler) {
        this._handleSubmitForm = handler;
    }

    setEventListeners() {
        //need to add the click event listener to the close icon while also adding the submit event handler.
        this._form.addEventListener('submit', (e) => {
        //this._popupElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        //reset the popup is closed 
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;

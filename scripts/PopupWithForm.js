import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor({handleSubmitForm, popupSelector}) {
        super(popupSelector);
        this._form = this._popupElement.querySelector(".form__content");

        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValues() {
        //collects data from all the input fields.
        const inputList = Array.from(this._form.querySelectorAll('.form__item'));
        this._inputValues = {};
        inputList.forEach(input => {this._formValues[input.name] = input.value});
        return this._inputValues;
    }

    setEventListeners() {
        //need to add the click event listener to the close icon while also adding the submit event handler.
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
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

class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        
        this._formElement = formElement;
    }

    _showErrorMessage(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
       
        // Make it visible
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        // Reset the message once it's hidden
        errorElement.textContent = "";
        
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement) {
             if (!inputElement.validity.valid) {
            // If NOT(!), show error message
            this._showErrorMessage(inputElement);
           } else {
            // If it's valid, hide the message
            this._hideErrorMessage(inputElement);
           }
    }
    
    /* This method will only enable the btn
 if all input is valid */
    _toggleButtonState() {
        const isValid = inputList.every((inputElement) => inputElement.validity.valid);
        if (!isValid) {
            this._submitButtonSelector.classList.add(`${this._inactiveButtonClass}`);
            this._submitButtonSelector.disabled = true;
        } else {
            this._submitButtonSelector.classList.remove(`${this._inactiveButtonClass}`);
            this._submitButtonSelector.disabled = false;
        }
    }

    _setEventListeners() {
        // Find all inputs in a form 
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        // Find a btn  
        const button = this._formElement.querySelector(this._submitButtonSelector);
        //Ensures the btn starts off disabled
        //this._toggleButtonState(this._inputSelector);
      
        //Iterate through inputs
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                // Add the input event handlers
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, button);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', ((evt) => {
        // Cancel the browser default action, so that clicking on the submit button won't refresh the page
        evt.preventDefault();
        }));

        this._setEventListeners();  
     }
}

export default FormValidator;
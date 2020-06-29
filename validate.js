function showErrorMessage(input, form, {inputErrorClass, errorClass}) {
 const error = form.querySelector(`#${input.id}-error`);
 error.textContent = input.validationMessage;

 // Make it visible
 error.classList.add(errorClass);
 input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, {errorClass, inputErrorClass}) {
 const error = form.querySelector(`#${input.id}-error`);
  // Reset the message once it's hidden
  error.textContent = "";
 
 error.classList.remove(errorClass);
 input.classList.remove(inputErrorClass);
}


function hasValidInput(input, form, rest) {
 if (!input.validity.valid) {
  // If NOT(!), show error message
  showErrorMessage(input, form, rest);
 } else {
  // If it's valid, hide the message
  hideErrorMessage(input, form, rest);
 }
}

/* This function will only enable the btn
 if all input is valid */
function toggleButtonState(inputs, button, buttonClass) {
 const isValid = inputs.every((input) => input.validity.valid);
 if (!isValid) {
   button.classList.add(`${buttonClass}`);
   button.disabled = true;
 } else {
   button.classList.remove(`${buttonClass}`);
   button.disabled = false;
 }
}

function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}){
 const forms = Array.from(document.querySelectorAll(formSelector));

 forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
   // Cancel the browser default behaviour
   evt.preventDefault();
  });

  // Find all inputs in a form 
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  // Find a btn  
  const button = form.querySelector(submitButtonSelector);
  //Ensures the btn starts off disabled
  toggleButtonState(inputs, button, inactiveButtonClass);

  //Iterate through inputs
  inputs.forEach((input) => {
   input.addEventListener('input', () => {
    // Add the input event handlers
    hasValidInput(input, form, rest);
    toggleButtonState(inputs, button, inactiveButtonClass);

   });
  });
 });
}

// Enabling validation by calling enableValidation()
// Pass all the settings on call

enableValidation({
 formSelector: '.form',
 inputSelector: '.form__item',
 submitButtonSelector: '.form__btn',
 inactiveButtonClass: 'form__btn_disabled',
 inputErrorClass: 'form__item_type_error',
 errorClass: 'form__error'
});
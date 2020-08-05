export const cardPopupImg = document.querySelector('.modal__img');
export const openImgModalWindow = document.querySelector('.modal_type_imgPopup');      
export const cardTitle = document.querySelector('.modal__caption');
export const form = document.querySelector('.form'); 

export function toggleModalWindow(modal) {
    modal.classList.toggle('modal_visible'); 
    if (modal.classList.contains('modal_visible')) {
    document.addEventListener('keydown', escapeModal);
    } else {
    document.removeEventListener('keydown', escapeModal);
    }
}

//Function to close modal window using Escape key
export function escapeModal(evt) {
    if (evt.key === "Escape") {
    toggleModalWindow(document.querySelector('.modal_visible'));
    }
}

const modalList = Array.from(document.querySelectorAll('.modal'));

// Each modal will close when a click evt occurs outside of modal
modalList.forEach((modal) => {
    modal.addEventListener('click', (evt) => {
    if (evt.target.classList.contains("modal_visible")) {
        toggleModalWindow(evt.target);
        form.reset();
    }
    });
});
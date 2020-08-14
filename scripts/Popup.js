class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
        this._popupElement.classList.add('modal_visible');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close(){
        this._popupElement.classList.remove('modal_visible');
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(e) {
        if (e.which == 27){
            this.close();
        }

    }

    setEventListeners() {
        this._popupElement.querySelector('.modal_visble').addEventListener('click', (e) => {
            this.close();
        });
    }
}

export default Popup;
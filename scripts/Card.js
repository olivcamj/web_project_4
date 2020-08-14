class Card {
    constructor(data, cardTemplateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._cardTemplateSelector = cardTemplateSelector;

        this._handleCardClick = handleCardClick;
    }

    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardTemplate;    
    }

    _addEventListeners() {

        const cardHeartIcon = this._card.querySelector('.card__heart-icon');
        const cardRemoveBtn = this._card.querySelector('.card__removeBtn');
        const cardImg = this._card.querySelector('.card__img');

        cardHeartIcon.addEventListener('click', (evt) => {
            this._handleHeartIcon(evt);
        });
        
        cardRemoveBtn.addEventListener('click', () => {
            this._card.closest('.card').remove();
            this._card = null;
        });

        cardImg.addEventListener('click', () => {
            this._handleCardClick();
                
            /*cardPopupImg.src = this._link;
                cardPopupImg.alt = this._name;
                cardTitle.textContent = this._name;
            
                openImgModalWindow.classList.add('modal_visible');
            */
        });
    }

    _handleHeartIcon(evt) {
        // Change heart color
        evt.target.classList.toggle('card__heart-icon_active');
    }

    
    generateCard = () => {

        this._card = this._getCardTemplate();

      
        this._card.querySelector('.card__text').textContent = this._name;
        this._card.querySelector('.card__img').style.backgroundImage = `url(${this._link})`;
        
        this._addEventListeners();
        
        return this._card;
    };
    
}

export default Card;
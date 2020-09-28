class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleDeleteIcon }, cardTemplateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._id = data._id;

        this._cardTemplateSelector = cardTemplateSelector;

        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleDeleteIcon = handleDeleteIcon;
    }

    id() {
        return this._id;
    }
    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardTemplate;    
    }

    _cardRemoveBtn() {
      return this._card.querySelector('.card__removeBtn');
    }

    _addEventListeners() {
        const cardHeartIcon = this._card.querySelector('.card__heart-icon');
        
        const cardImg = this._card.querySelector('.card__img');

        cardHeartIcon.addEventListener('click', (evt) => {
            this._handleHeartIcon(evt);
        });
        
        this._cardRemoveBtn().addEventListener('click', () => {
            this._handleDeleteClick(this.id());
        });

        cardImg.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    _handleHeartIcon(evt) {
        // Change heart color
        evt.target.classList.toggle('card__heart-icon_active');
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    hideRemoveBtn() {
        this._cardRemoveBtn().classList.add('card__removeBtn_type_hidden');
    }
    
    generateCard() {

        this._card = this._getCardTemplate();
      
        this._card.querySelector('.card__text').textContent = this._name;
        this._card.querySelector('.card__img').style.backgroundImage = `url(${this._link})`;
        
        this._addEventListeners();
        this._handleDeleteIcon();
        
        return this._card;
    };
    
}

export default Card;
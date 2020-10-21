class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleDeleteIcon, handleLikeCount, handleLikeClick }, cardTemplateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes;

        this._cardTemplateSelector = cardTemplateSelector;

        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleDeleteIcon = handleDeleteIcon;
        this._handleLikeCount = handleLikeCount;
        this._handleLikeClick = handleLikeClick;
    }

    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardTemplate;    
    }

    id() {
        return this._id;
    }

    _cardRemoveBtn() {
        return this._card.querySelector('.card__removeBtn');
    }

    _cardLikeCount() {
        return this._card.querySelector('.card__likeCount');
    }

    _cardHeartIcon() {
        return this._card.querySelector('.card__heart-icon');
    }

    _cardImage() {
        return this._card.querySelector('.card__img');
    }


    _addEventListeners() {

        this._cardHeartIcon().addEventListener('click', () => {
            this._handleLikeClick(this._id);
        });
        
        this._cardRemoveBtn().addEventListener('click', () => {
            this._handleDeleteClick(this.id()); 
        });

        this._cardImage().addEventListener('click', () => {
            this._handleCardClick({ link: this._link, name: this._text });
        });
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    hideRemoveBtn() {
        this._cardRemoveBtn().classList.add('card__removeBtn_type_hidden');
    }

    _likeCount() {
        if (typeof this._likes !== "undefined") {
            this._cardLikeCount().textContent = this._likes.length;
        };
    }

    renderLike() {
        this._cardHeartIcon().classList.add('card__heart-icon_active');
    }

    wasLiked() {
        return this._cardHeartIcon().classList.contains("card__heart-icon_active");
    }

    like(count) {
        this._cardHeartIcon().classList.add('card__heart-icon_active');
        this._cardLikeCount().textContent = count;
    }
    deleteLike(count) {
        this._cardHeartIcon().classList.remove('card__heart-icon_active');
        this._cardLikeCount().textContent = count;
    }

    generateCard() {

        this._card = this._getCardTemplate();
      
        this._card.querySelector('.card__text').textContent = this._name;
        this._cardImage().style.backgroundImage = `url(${this._link})`;
        
        this._likeCount();
        
        this._addEventListeners();
        
        this._handleDeleteIcon();
        
        return this._card;
    };
    
}

export default Card;
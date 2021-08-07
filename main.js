/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _createClass(Api, [{
    key: "getUserData",
    value: function getUserData() {
      return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._baseUrl + '/cards', {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._baseUrl + '/users/me', {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
      });
    }
  }, {
    key: "addCard",
    value: function addCard(_ref2) {
      var link = _ref2.link,
          name = _ref2.name;
      return fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch(this._baseUrl + '/cards/' + cardId, {
        headers: this._headers,
        method: "DELETE"
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
      });
    }
  }, {
    key: "editUserInfo",
    value: function editUserInfo(data) {
      return fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.title
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
      });
    }
  }, {
    key: "changeLikeStatus",
    value: function changeLikeStatus(cardId, boolean) {
      if (boolean) {
        return fetch(this._baseUrl + '/cards/likes/' + cardId, {
          headers: this._headers,
          method: "PUT"
        }).then(function (res) {
          return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
        });
      } else {
        return fetch(this._baseUrl + '/cards/likes/' + cardId, {
          headers: this._headers,
          method: "DELETE"
        }).then(function (res) {
          return res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
        });
      }
    }
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(avatar) {
      return fetch(this._baseUrl + '/users/me/avatar', {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        res.ok ? res.json() : Promise.reject('Error!' + res.statusText);
      });
    }
  }]);

  return Api;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardTemplateSelector) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick,
        handleDeleteClick = _ref.handleDeleteClick,
        handleDeleteIcon = _ref.handleDeleteIcon,
        handleLikeCount = _ref.handleLikeCount,
        handleLikeClick = _ref.handleLikeClick;

    _classCallCheck(this, Card);

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

  _createClass(Card, [{
    key: "_getCardTemplate",
    value: function _getCardTemplate() {
      var cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.card').cloneNode(true);
      return cardTemplate;
    }
  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "_cardRemoveBtn",
    value: function _cardRemoveBtn() {
      return this._card.querySelector('.card__removeBtn');
    }
  }, {
    key: "_cardLikeCount",
    value: function _cardLikeCount() {
      return this._card.querySelector('.card__likeCount');
    }
  }, {
    key: "_cardHeartIcon",
    value: function _cardHeartIcon() {
      return this._card.querySelector('.card__heart-icon');
    }
  }, {
    key: "_cardImage",
    value: function _cardImage() {
      return this._card.querySelector('.card__img');
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this = this;

      this._cardHeartIcon().addEventListener('click', function () {
        _this._handleLikeClick(_this._id);
      });

      this._cardRemoveBtn().addEventListener('click', function () {
        _this._handleDeleteClick(_this.id());
      });

      this._cardImage().addEventListener('click', function () {
        _this._handleCardClick({
          link: _this._link,
          name: _this._text
        });
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._card.remove();

      this._card = null;
    }
  }, {
    key: "hideRemoveBtn",
    value: function hideRemoveBtn() {
      this._cardRemoveBtn().classList.add('card__removeBtn_type_hidden');
    }
  }, {
    key: "_likeCount",
    value: function _likeCount() {
      if (typeof this._likes !== "undefined") {
        this._cardLikeCount().textContent = this._likes.length;
      }

      ;
    }
  }, {
    key: "renderLike",
    value: function renderLike() {
      this._cardHeartIcon().classList.add('card__heart-icon_active');
    }
  }, {
    key: "wasLiked",
    value: function wasLiked() {
      return this._cardHeartIcon().classList.contains("card__heart-icon_active");
    }
  }, {
    key: "like",
    value: function like(count) {
      this._cardHeartIcon().classList.add('card__heart-icon_active');

      this._cardLikeCount().textContent = count;
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(count) {
      this._cardHeartIcon().classList.remove('card__heart-icon_active');

      this._cardLikeCount().textContent = count;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._card = this._getCardTemplate();
      this._card.querySelector('.card__text').textContent = this._name;
      this._cardImage().style.backgroundImage = "url(".concat(this._link, ")");

      this._likeCount();

      this._addEventListeners();

      this._handleDeleteIcon();

      return this._card;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  _createClass(FormValidator, [{
    key: "_showErrorMessage",
    value: function _showErrorMessage(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      errorElement.textContent = inputElement.validationMessage; // Make it visible

      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    }
  }, {
    key: "_hideErrorMessage",
    value: function _hideErrorMessage(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      errorElement.classList.remove(this._errorClass);
      inputElement.classList.remove(this._inputErrorClass); // Reset the message once it's hidden

      errorElement.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        // If NOT(!), show error message
        this._showErrorMessage(inputElement);
      } else {
        // If it's valid, hide the message
        this._hideErrorMessage(inputElement);
      }
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, button) {
      var isValid = inputList.every(function (inputElement) {
        return inputElement.validity.valid;
      });

      if (isValid) {
        button.classList.remove("".concat(this._inactiveButtonClass));
        button.disabled = false;
      } else {
        button.classList.add("".concat(this._inactiveButtonClass));
        button.disabled = true;
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      // Find all inputs in a form 
      var inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); // Find a btn  

      var button = this._formElement.querySelector(this._submitButtonSelector); //Ensures the btn starts off disabled


      this._toggleButtonState(inputList, button); //Iterate through inputs


      inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          // Add the input event handlers
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState(inputList, button);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        // Cancel the browser default action, so that clicking on the submit button won't refresh the page
        evt.preventDefault();
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('modal_visible');

      document.addEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('modal_visible');

      document.removeEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(e) {
      var ESC = 27;

      if (e.which === ESC) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.querySelector('.modal__closeBtn').addEventListener('click', function () {
        _this.close();
      });

      this._popupElement.addEventListener('click', function (e) {
        if (!e.target.closest(".modal__content")) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var handleSubmitForm = _ref.handleSubmitForm,
        popupSelector = _ref.popupSelector;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._form = _this._popupElement.querySelector('.form');
    _this._popupElement = popupSelector;
    _this._inputList = _this._popupElement.querySelectorAll(".form__item");
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      //collects data from all the input fields.  
      //const inputList = Array.from(this._form.querySelectorAll('.form__item'));
      this._inputValues = {};

      this._inputList.forEach(function (input) {
        _this2._inputValues[input.name] = input.value;
      });

      return this._inputValues;
    }
  }, {
    key: "setDeleteHandler",
    value: function setDeleteHandler(handler) {
      this._handleSubmitForm = handler;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      //need to add the click event listener to the close icon while also adding the submit event handler.
      this._form.addEventListener('submit', function (e) {
        //this._popupElement.addEventListener('submit', (e) => {
        e.preventDefault();

        _this3._handleSubmitForm(_this3._getInputValues());
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      //reset the popup is closed 
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._image = _this._popupElement.querySelector('.modal__img');
    _this._caption = _this._popupElement.querySelector('.modal__caption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var link = _ref.link,
          name = _ref.name;
      this._image.src = link;
      this._image.alt = name;
      this._caption.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, classSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = classSelector;
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      //takes a DOM element and adds it to the container.
      this._container.prepend(element);
    }
  }]);

  return Section;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        titleSelector = _ref.titleSelector;

    _classCallCheck(this, UserInfo);

    this._userName = document.querySelector(nameSelector);
    this._userTitle = document.querySelector(titleSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.textContent,
        title: this._userTitle.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          title = _ref2.title;
      this._userName.textContent = name;
      this._userTitle.textContent = title;
    }
  }]);

  return UserInfo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig),
/* harmony export */   "editProfileModalWindow": () => (/* binding */ editProfileModalWindow),
/* harmony export */   "addCardModalWindow": () => (/* binding */ addCardModalWindow),
/* harmony export */   "openImgModalWindow": () => (/* binding */ openImgModalWindow),
/* harmony export */   "deleteCardModalWindow": () => (/* binding */ deleteCardModalWindow),
/* harmony export */   "setUserAvatarModalWindow": () => (/* binding */ setUserAvatarModalWindow),
/* harmony export */   "profileEditBtn": () => (/* binding */ profileEditBtn),
/* harmony export */   "addBtn": () => (/* binding */ addBtn),
/* harmony export */   "setAvatarBtn": () => (/* binding */ setAvatarBtn),
/* harmony export */   "addCardCloseBtn": () => (/* binding */ addCardCloseBtn),
/* harmony export */   "inputName": () => (/* binding */ inputName),
/* harmony export */   "inputOccupation": () => (/* binding */ inputOccupation),
/* harmony export */   "addName": () => (/* binding */ addName),
/* harmony export */   "addUrl": () => (/* binding */ addUrl),
/* harmony export */   "cardTemplateSelector": () => (/* binding */ cardTemplateSelector),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "avatar": () => (/* binding */ avatar),
/* harmony export */   "addCardForm": () => (/* binding */ addCardForm),
/* harmony export */   "editProfileForm": () => (/* binding */ editProfileForm)
/* harmony export */ });
var initialCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  name: "Vanois National Park",
  link: "https://code.s3.yandex.net/web-code/vanois.jpg"
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];
var defaultConfig = {
  inputSelector: '.form__item',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error'
}; // Wrappers

var editProfileModalWindow = document.querySelector('.modal_type_editProfile');
var addCardModalWindow = document.querySelector('.modal_type_addCard');
var openImgModalWindow = document.querySelector('.modal_type_imgPopup');
var deleteCardModalWindow = document.querySelector('.modal_type_deleteCard');
var setUserAvatarModalWindow = document.querySelector('.modal_type_setAvatar'); // Buttons and other DOM elements

var profileEditBtn = document.querySelector('.profile__editBtn');
var addBtn = document.querySelector('.profile__addBtn');
var setAvatarBtn = document.querySelector('.profile__avatar-overlay');
var addCardCloseBtn = addCardModalWindow.querySelector('.modal__closeBtn'); // Form data 

var inputName = document.querySelector('.form__item_el_name');
var inputOccupation = document.querySelector('.form__item_el_occupation'); //add new card data

var addName = document.querySelector('.form__item_el_title');
var addUrl = document.querySelector('.form__item_el_url');
var cardTemplateSelector = '.card-template';
var list = document.querySelector('.elements__container');
var avatar = document.querySelector('.profile__avatar');
var addCardForm = document.querySelector('.form__type_add');
var editProfileForm = document.querySelector('.form__type_edit');

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var modalWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_7__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.openImgModalWindow);
modalWithImage.setEventListeners();
var deleteForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__.default({
  handleSubmitForm: function handleSubmitForm() {},
  popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.deleteCardModalWindow
});
deleteForm.setEventListeners();
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_4__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-4",
  headers: {
    authorization: "072f7e25-49ec-4ac7-aa51-bf0613ff728e",
    "Content-Type": "application/json"
  }
});
api.getUserData().then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      res = _ref2[1];

  var MYID = userData['_id'];
  var cardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__.default({
    items: res,
    renderer: function renderer(data) {
      var renderCard = creatingCardInfo(data);
      cardSection.addItem(renderCard.generateCard());
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.list);
  cardSection.renderItems();
  var addForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__.default({
    handleSubmitForm: function handleSubmitForm(data) {
      renderLoading(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addCardModalWindow);
      api.addCard(data).then(function (result) {
        var newCard = creatingCardInfo(result);
        renderLoading(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addCardModalWindow);
        cardSection.addItem(newCard.generateCard());
        addForm.close();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addCardModalWindow
  });
  addForm.setEventListeners();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener('click', function () {
    addForm.open();
  });

  function renderLoading(isLoading, modal) {
    if (isLoading) {
      modal.querySelector('.form__btn').textContent = 'Saving...';
    } else {
      modal.querySelector('.form__btn').textContent = 'Save'; //formSave.value = 'Save';
    }
  }

  ;
  var setUserAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__.default({
    handleSubmitForm: function handleSubmitForm(data) {
      renderLoading(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.setUserAvatarModalWindow);
      api.setUserAvatar(data.link).then(function () {
        _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatar.src = data.link;
        renderLoading(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.setUserAvatarModalWindow);
        setUserAvatar.close();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.setUserAvatarModalWindow
  });
  setUserAvatar.setEventListeners();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.setAvatarBtn.addEventListener('click', function () {
    setUserAvatar.open();
  });

  function creatingCardInfo(data) {
    var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.default({
      data: data,
      handleCardClick: function handleCardClick() {
        modalWithImage.open(data);
      },
      handleDeleteClick: function handleDeleteClick(cardId) {
        deleteForm.setDeleteHandler(function () {
          api.deleteCard(cardId).then(function () {
            card.deleteCard();
            deleteForm.close();
          }).catch(function (err) {
            return console.log(err);
          });
        });
        deleteForm.open();
      },
      handleDeleteIcon: function handleDeleteIcon() {
        if (MYID !== data.owner._id) {
          card.hideRemoveBtn();
        }

        ;
      },
      handleLikeCount: function handleLikeCount() {
        if (data.likes.length > 0) {
          data.likes.forEach(function (element) {
            if (element._id === MYID) {
              card.renderLike();
            }
          });
        }
      },
      handleLikeClick: function handleLikeClick(cardId) {
        if (card.wasLiked() === false) {
          api.changeLikeStatus(cardId, true).then(function (result) {
            var count = result.likes.length;
            card.like(count);
          }).catch(function (err) {
            return console.log(err);
          });
        } else {
          api.changeLikeStatus(cardId, false).then(function (result) {
            var count = result.likes.length;
            card.deleteLike(count);
          }).catch(function (err) {
            return console.log(err);
          });
        }

        ;
      }
    }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardTemplateSelector);
    return card;
  }

  var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_9__.default({
    nameSelector: '.profile__heading',
    titleSelector: '.profile__occupation'
  });
  console.log('profile!!', userData); //getUserInfo()

  userInfo.setUserInfo({
    name: userData.name,
    title: userData.about
  }); //{ name: userData.name, title: userData.about})

  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatar.src = userData.avatar;
  var editForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__.default({
    handleSubmitForm: function handleSubmitForm(data) {
      renderLoading(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editProfileModalWindow);
      api.editUserInfo(data).then(function () {
        userInfo.setUserInfo(data);
        renderLoading(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editProfileModalWindow);
        editForm.close();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    popupSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editProfileModalWindow
  });
  editForm.setEventListeners();
  var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editProfileForm);
  var addCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addCardForm);
  editProfileValidator.enableValidation();
  addCardValidator.enableValidation();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileEditBtn.addEventListener('click', function () {
    var getFormInfo = userInfo.getUserInfo();
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.inputName.value = getFormInfo.name;
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.inputOccupation.value = getFormInfo.title;
    editForm.open();
  });
}).catch(function (err) {
  return console.log(err);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3JDLGlCQUFUO0FBRUEsTUFBTXVDLG9CQUFvQixHQUFHLElBQUl6SSxpRUFBSixDQUFrQitFLDhEQUFsQixFQUFpQ2dCLGdFQUFqQyxDQUE3QjtBQUNBLE1BQU0yQyxnQkFBZ0IsR0FBRyxJQUFJMUksaUVBQUosQ0FBa0IrRSw4REFBbEIsRUFBaUNlLDREQUFqQyxDQUF6QjtBQUVBMkMsRUFBQUEsb0JBQW9CLENBQUNFLGdCQUFyQjtBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQ0MsZ0JBQWpCO0FBRUF0RCxFQUFBQSxnRkFBQSxDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzNDLFFBQU11RCxXQUFXLEdBQUdQLFFBQVEsQ0FBQ3JNLFdBQVQsRUFBcEI7QUFDQXlKLElBQUFBLGdFQUFBLEdBQWtCbUQsV0FBVyxDQUFDbE0sSUFBOUI7QUFDQWdKLElBQUFBLHNFQUFBLEdBQXdCa0QsV0FBVyxDQUFDMUwsS0FBcEM7QUFDQXFMLElBQUFBLFFBQVEsQ0FBQ2hCLElBQVQ7QUFDSCxHQUxEO0FBT0gsQ0F4SkwsRUF5SkNKLEtBekpELENBeUpPLFVBQUNDLEdBQUQ7QUFBQSxTQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsQ0F6SlAsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBpIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnMgfSkge1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKXtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLmdldFVzZXJJbmZvKCksIHRoaXMuZ2V0SW5pdGlhbENhcmRzKCldKVxuICAgIH1cblxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL2NhcmRzJywge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoJ0Vycm9yIScgKyByZXMuc3RhdHVzVGV4dCkpXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy91c2Vycy9tZScsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KCdFcnJvciEnICsgcmVzLnN0YXR1c1RleHQpKVxuICAgIH1cblxuICAgIGFkZENhcmQoeyBsaW5rLCBuYW1lIH0pIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL2NhcmRzJywge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoJ0Vycm9yJyArIHJlcy5zdGF0dXNUZXh0KSlcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL2NhcmRzLycgKyBjYXJkSWQsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KCdFcnJvciEnICsgcmVzLnN0YXR1c1RleHQpKVxuICAgIH1cblxuICAgIGVkaXRVc2VySW5mbyhkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy91c2Vycy9tZScsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgYWJvdXQ6IGRhdGEudGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdCgnRXJyb3IhJyArIHJlcy5zdGF0dXNUZXh0KSlcbiAgICB9XG5cbiAgICBjaGFuZ2VMaWtlU3RhdHVzKGNhcmRJZCwgYm9vbGVhbikge1xuICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyAnL2NhcmRzL2xpa2VzLycgKyBjYXJkSWQsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCJ9KSBcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdCgnRXJyb3IhJyArIHJlcy5zdGF0dXNUZXh0KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy9jYXJkcy9saWtlcy8nICsgY2FyZElkLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwifSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdCgnRXJyb3IhJyArIHJlcy5zdGF0dXNUZXh0KSlcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgc2V0VXNlckF2YXRhcihhdmF0YXIpe1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArICcvdXNlcnMvbWUvYXZhdGFyJywge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGF2YXRhclxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge3Jlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdCgnRXJyb3IhJyArIHJlcy5zdGF0dXNUZXh0KX0pXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoeyBkYXRhLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUNsaWNrLCBoYW5kbGVEZWxldGVJY29uLCBoYW5kbGVMaWtlQ291bnQsIGhhbmRsZUxpa2VDbGljayB9LCBjYXJkVGVtcGxhdGVTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgICAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG5cbiAgICAgICAgdGhpcy5fY2FyZFRlbXBsYXRlU2VsZWN0b3IgPSBjYXJkVGVtcGxhdGVTZWxlY3RvcjtcblxuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24gPSBoYW5kbGVEZWxldGVJY29uO1xuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ291bnQgPSBoYW5kbGVMaWtlQ291bnQ7XG4gICAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcbiAgICB9XG5cbiAgICBfZ2V0Q2FyZFRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFRlbXBsYXRlU2VsZWN0b3IpXG4gICAgICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbiAgICAgICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRUZW1wbGF0ZTsgICAgXG4gICAgfVxuXG4gICAgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBfY2FyZFJlbW92ZUJ0bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3JlbW92ZUJ0bicpO1xuICAgIH1cblxuICAgIF9jYXJkTGlrZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZUNvdW50Jyk7XG4gICAgfVxuXG4gICAgX2NhcmRIZWFydEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19oZWFydC1pY29uJyk7XG4gICAgfVxuXG4gICAgX2NhcmRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpO1xuICAgIH1cblxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgICAgIHRoaXMuX2NhcmRIZWFydEljb24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzLl9pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fY2FyZFJlbW92ZUJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2xpY2sodGhpcy5pZCgpKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHsgbGluazogdGhpcy5fbGluaywgbmFtZTogdGhpcy5fdGV4dCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fY2FyZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaGlkZVJlbW92ZUJ0bigpIHtcbiAgICAgICAgdGhpcy5fY2FyZFJlbW92ZUJ0bigpLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3JlbW92ZUJ0bl90eXBlX2hpZGRlbicpO1xuICAgIH1cblxuICAgIF9saWtlQ291bnQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbGlrZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRMaWtlQ291bnQoKS50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJMaWtlKCkge1xuICAgICAgICB0aGlzLl9jYXJkSGVhcnRJY29uKCkuY2xhc3NMaXN0LmFkZCgnY2FyZF9faGVhcnQtaWNvbl9hY3RpdmUnKTtcbiAgICB9XG5cbiAgICB3YXNMaWtlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmRIZWFydEljb24oKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19oZWFydC1pY29uX2FjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBsaWtlKGNvdW50KSB7XG4gICAgICAgIHRoaXMuX2NhcmRIZWFydEljb24oKS5jbGFzc0xpc3QuYWRkKCdjYXJkX19oZWFydC1pY29uX2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9jYXJkTGlrZUNvdW50KCkudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICB9XG4gICAgZGVsZXRlTGlrZShjb3VudCkge1xuICAgICAgICB0aGlzLl9jYXJkSGVhcnRJY29uKCkuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9faGVhcnQtaWNvbl9hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5fY2FyZExpa2VDb3VudCgpLnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xuXG4gICAgICAgIHRoaXMuX2NhcmQgPSB0aGlzLl9nZXRDYXJkVGVtcGxhdGUoKTtcbiAgICAgIFxuICAgICAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190ZXh0JykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgICAgICB0aGlzLl9jYXJkSW1hZ2UoKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fbGlua30pYDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2xpa2VDb3VudCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24oKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJkO1xuICAgIH07XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgX3Nob3dFcnJvck1lc3NhZ2UoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgIFxuICAgICAgICAvLyBNYWtlIGl0IHZpc2libGVcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgX2hpZGVFcnJvck1lc3NhZ2UoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTsgXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICAvLyBSZXNldCB0aGUgbWVzc2FnZSBvbmNlIGl0J3MgaGlkZGVuXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgLy8gSWYgTk9UKCEpLCBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuX3Nob3dFcnJvck1lc3NhZ2UoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGl0J3MgdmFsaWQsIGhpZGUgdGhlIG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuX2hpZGVFcnJvck1lc3NhZ2UoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b24pIHtcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlucHV0TGlzdC5ldmVyeSgoaW5wdXRFbGVtZW50KSA9PiBpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuXG4gICAgICAgIGlmKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3N9YCk7XG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTsgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3RoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3N9YCk7XG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBGaW5kIGFsbCBpbnB1dHMgaW4gYSBmb3JtIFxuICAgICAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgICAgICAvLyBGaW5kIGEgYnRuICBcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgICAgIC8vRW5zdXJlcyB0aGUgYnRuIHN0YXJ0cyBvZmYgZGlzYWJsZWRcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b24pO1xuICAgICAgXG4gICAgICAgIC8vSXRlcmF0ZSB0aHJvdWdoIGlucHV0c1xuICAgICAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBpbnB1dCBldmVudCBoYW5kbGVyc1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKGV2dCkgPT4ge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIGJyb3dzZXIgZGVmYXVsdCBhY3Rpb24sIHNvIHRoYXQgY2xpY2tpbmcgb24gdGhlIHN1Ym1pdCBidXR0b24gd29uJ3QgcmVmcmVzaCB0aGUgcGFnZVxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpOyBcbiAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yOyIsImNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IHBvcHVwU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvcGVuKCl7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF92aXNpYmxlJyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF92aXNpYmxlJyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGUpIHtcbiAgICAgICAgY29uc3QgRVNDID0gMjc7XG4gICAgICAgIGlmIChlLndoaWNoID09PSBFU0Mpe1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZUJ0bicpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi5tb2RhbF9fY29udGVudFwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgaGFuZGxlU3VibWl0Rm9ybSwgcG9wdXBTZWxlY3RvciB9KSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtID0gaGFuZGxlU3VibWl0Rm9ybTtcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBwb3B1cFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pdGVtXCIpO1xuICAgIH1cblxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICAgICAgLy9jb2xsZWN0cyBkYXRhIGZyb20gYWxsIHRoZSBpbnB1dCBmaWVsZHMuICBcbiAgICAgICAgLy9jb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2l0ZW0nKSk7XG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHt0aGlzLl9pbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcbiAgICB9XG5cbiAgICBzZXREZWxldGVIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vbmVlZCB0byBhZGQgdGhlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBpY29uIHdoaWxlIGFsc28gYWRkaW5nIHRoZSBzdWJtaXQgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAvL3RoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIC8vcmVzZXQgdGhlIHBvcHVwIGlzIGNsb3NlZCBcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgICAgICBzdXBlci5jbG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoRm9ybTtcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltZycpO1xuICAgICAgICB0aGlzLl9jYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2FwdGlvbicpO1xuICAgIH1cblxuICAgIG9wZW4oeyBsaW5rLCBuYW1lIH0pIHtcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcbiAgICAgICAgdGhpcy5fY2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cblxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhJbWFnZTsiLCJjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9ICwgY2xhc3NTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNsYXNzU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbXMoKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pOyAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgLy90YWtlcyBhIERPTSBlbGVtZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBjb250YWluZXIuXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjsiLCJjbGFzcyBVc2VySW5mbyB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIHRpdGxlU2VsZWN0b3IgfSkge1xuICAgICAgICB0aGlzLl91c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5fdXNlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZVNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtuYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCwgdGl0bGU6IHRoaXMuX3VzZXJUaXRsZS50ZXh0Q29udGVudH07XG4gICAgfVxuXG4gICAgc2V0VXNlckluZm8oeyBuYW1lLCB0aXRsZSB9KSB7XG4gICAgICAgIHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdXNlclRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbzsiLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJWYW5vaXMgTmF0aW9uYWwgUGFya1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pcy5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIlxuICAgIH1cbiAgXTtcblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBpbnB1dFNlbGVjdG9yOiAnLmZvcm1fX2l0ZW0nLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLmZvcm1fX2J0bicsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ2Zvcm1fX2J0bl9kaXNhYmxlZCcsXG4gICAgaW5wdXRFcnJvckNsYXNzOiAnZm9ybV9faXRlbV90eXBlX2Vycm9yJyxcbiAgICBlcnJvckNsYXNzOiAnZm9ybV9fZXJyb3InXG4gIH07IFxuXG5cbi8vIFdyYXBwZXJzXG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF90eXBlX2VkaXRQcm9maWxlJyk7XG5leHBvcnQgY29uc3QgYWRkQ2FyZE1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX3R5cGVfYWRkQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IG9wZW5JbWdNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF90eXBlX2ltZ1BvcHVwJyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQ2FyZE1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX3R5cGVfZGVsZXRlQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IHNldFVzZXJBdmF0YXJNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF90eXBlX3NldEF2YXRhcicpO1xuLy8gQnV0dG9ucyBhbmQgb3RoZXIgRE9NIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdEJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGRCdG4nKTtcbmV4cG9ydCBjb25zdCBzZXRBdmF0YXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyLW92ZXJsYXknKTtcbmV4cG9ydCBjb25zdCBhZGRDYXJkQ2xvc2VCdG4gPSBhZGRDYXJkTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZUJ0bicpO1xuXG4vLyBGb3JtIGRhdGEgXG5leHBvcnQgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2l0ZW1fZWxfbmFtZScpO1xuZXhwb3J0IGNvbnN0IGlucHV0T2NjdXBhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pdGVtX2VsX29jY3VwYXRpb24nKTtcbi8vYWRkIG5ldyBjYXJkIGRhdGFcbmV4cG9ydCBjb25zdCBhZGROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2l0ZW1fZWxfdGl0bGUnKTtcbmV4cG9ydCBjb25zdCBhZGRVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faXRlbV9lbF91cmwnKTtcbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGVTZWxlY3RvciA9ICcuY2FyZC10ZW1wbGF0ZSc7XG5leHBvcnQgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpO1xuZXhwb3J0IGNvbnN0IGFkZENhcmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3R5cGVfYWRkJyk7XG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3R5cGVfZWRpdCcpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICBkZWZhdWx0Q29uZmlnLCBcbiAgICBlZGl0UHJvZmlsZU1vZGFsV2luZG93LCBcbiAgICBhZGRDYXJkTW9kYWxXaW5kb3csIFxuICAgIG9wZW5JbWdNb2RhbFdpbmRvdyxcbiAgICBkZWxldGVDYXJkTW9kYWxXaW5kb3csXG4gICAgc2V0VXNlckF2YXRhck1vZGFsV2luZG93LFxuICAgIHByb2ZpbGVFZGl0QnRuLCBcbiAgICBhZGRCdG4sIFxuICAgIHNldEF2YXRhckJ0biwgXG4gICAgYWRkQ2FyZENsb3NlQnRuLCAgXG4gICAgY2FyZFRlbXBsYXRlU2VsZWN0b3IsXG4gICAgbGlzdCxcbiAgICBhZGRDYXJkRm9ybSxcbiAgICBlZGl0UHJvZmlsZUZvcm0sXG4gICAgYXZhdGFyLFxuICAgIE1ZSUQsXG4gICAgaW5wdXROYW1lLFxuICAgIGlucHV0T2NjdXBhdGlvblxufSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cC5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuXG5jb25zdCBtb2RhbFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShvcGVuSW1nTW9kYWxXaW5kb3cpO1xubW9kYWxXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgZGVsZXRlRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgICBoYW5kbGVTdWJtaXRGb3JtOiAoKSA9PiB7fSxcbiAgICBwb3B1cFNlbGVjdG9yOiBkZWxldGVDYXJkTW9kYWxXaW5kb3dcbn0pO1xuXG5kZWxldGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cblxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtNFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogXCIwNzJmN2UyNS00OWVjLTRhYzctYWE1MS1iZjA2MTNmZjcyOGVcIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG59KTtcblxuYXBpLmdldFVzZXJEYXRhKClcbiAgICAudGhlbigoW3VzZXJEYXRhLCByZXNdKSA9PiB7IFxuICAgICAgICBjb25zdCBNWUlEID0gdXNlckRhdGFbJ19pZCddO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XG4gICAgICAgICAgICBpdGVtczogcmVzLFxuICAgICAgICAgICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2FyZCA9IGNyZWF0aW5nQ2FyZEluZm8oZGF0YSk7XG4gICAgICAgICAgICAgICAgY2FyZFNlY3Rpb24uYWRkSXRlbShyZW5kZXJDYXJkLmdlbmVyYXRlQ2FyZCgpKTtcbiAgICAgICAgfVxuICAgICAgICB9LCBsaXN0KTtcbiAgICAgICAgXG4gICAgICAgIGNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5cbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgICAgICAgICAgICBoYW5kbGVTdWJtaXRGb3JtOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlckxvYWRpbmcodHJ1ZSwgYWRkQ2FyZE1vZGFsV2luZG93KTsgICAgICAgIFxuICAgICAgICAgICAgICAgIGFwaS5hZGRDYXJkKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGluZ0NhcmRJbmZvKHJlc3VsdCk7ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTG9hZGluZyhmYWxzZSwgYWRkQ2FyZE1vZGFsV2luZG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRTZWN0aW9uLmFkZEl0ZW0obmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRGb3JtLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9wdXBTZWxlY3RvcjogYWRkQ2FyZE1vZGFsV2luZG93XG4gICAgICAgIH0pOyBcbiAgICAgICAgYWRkRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZEZvcm0ub3BlbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJMb2FkaW5nKGlzTG9hZGluZywgbW9kYWwpIHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnRuJykudGV4dENvbnRlbnQgPSAnU2F2aW5nLi4uJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kYWwucXVlcnlTZWxlY3RvcignLmZvcm1fX2J0bicpLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICAgICAgICAgIC8vZm9ybVNhdmUudmFsdWUgPSAnU2F2ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2V0VXNlckF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckxvYWRpbmcodHJ1ZSwgc2V0VXNlckF2YXRhck1vZGFsV2luZG93KTtcbiAgICAgICAgICAgICAgICAgICAgYXBpLnNldFVzZXJBdmF0YXIoZGF0YS5saW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhci5zcmMgPSBkYXRhLmxpbms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTG9hZGluZyhmYWxzZSwgc2V0VXNlckF2YXRhck1vZGFsV2luZG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyQXZhdGFyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvcHVwU2VsZWN0b3I6IHNldFVzZXJBdmF0YXJNb2RhbFdpbmRvd1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRVc2VyQXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHNldEF2YXRhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJBdmF0YXIub3BlbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRpbmdDYXJkSW5mbyhkYXRhKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxXaXRoSW1hZ2Uub3BlbihkYXRhKTsgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlQ2xpY2s6IChjYXJkSWQpID0+IHsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVGb3JtLnNldERlbGV0ZUhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZGVsZXRlQ2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZvcm0uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVGb3JtLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUljb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1ZSUQgIT09IGRhdGEub3duZXIuX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmhpZGVSZW1vdmVCdG4oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZUxpa2VDb3VudDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5saWtlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxpa2VzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVsZW1lbnQuX2lkID09PSBNWUlEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQucmVuZGVyTGlrZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYW5kbGVMaWtlQ2xpY2s6IChjYXJkSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQud2FzTGlrZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5jaGFuZ2VMaWtlU3RhdHVzKGNhcmRJZCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSByZXN1bHQubGlrZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQubGlrZShjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmNoYW5nZUxpa2VTdGF0dXMoY2FyZElkLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSByZXN1bHQubGlrZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZGVsZXRlTGlrZShjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhcmRUZW1wbGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICAgICAgICAgICAgbmFtZVNlbGVjdG9yOiAnLnByb2ZpbGVfX2hlYWRpbmcnLFxuICAgICAgICAgICAgdGl0bGVTZWxlY3RvcjogJy5wcm9maWxlX19vY2N1cGF0aW9uJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2ZpbGUhIScsIHVzZXJEYXRhKVxuICAgICAgICAvL2dldFVzZXJJbmZvKClcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oe25hbWU6IHVzZXJEYXRhLm5hbWUsIHRpdGxlOiB1c2VyRGF0YS5hYm91dH0pIC8veyBuYW1lOiB1c2VyRGF0YS5uYW1lLCB0aXRsZTogdXNlckRhdGEuYWJvdXR9KVxuICAgICAgICBhdmF0YXIuc3JjID0gdXNlckRhdGEuYXZhdGFyO1xuXG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0Rm9ybTogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJMb2FkaW5nKHRydWUsIGVkaXRQcm9maWxlTW9kYWxXaW5kb3cpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFwaS5lZGl0VXNlckluZm8oZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJMb2FkaW5nKGZhbHNlLCBlZGl0UHJvZmlsZU1vZGFsV2luZG93KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9wdXBTZWxlY3RvcjogZWRpdFByb2ZpbGVNb2RhbFdpbmRvd1xuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0Rm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRQcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZGVmYXVsdENvbmZpZywgZWRpdFByb2ZpbGVGb3JtKTtcbiAgICAgICAgY29uc3QgYWRkQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGRlZmF1bHRDb25maWcsIGFkZENhcmRGb3JtKTtcblxuICAgICAgICBlZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIGFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4gICAgICAgIHByb2ZpbGVFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgIGNvbnN0IGdldEZvcm1JbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IGdldEZvcm1JbmZvLm5hbWU7XG4gICAgICAgICAgICBpbnB1dE9jY3VwYXRpb24udmFsdWUgPSBnZXRGb3JtSW5mby50aXRsZTtcbiAgICAgICAgICAgIGVkaXRGb3JtLm9wZW4oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KVxuLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpOyJdLCJuYW1lcyI6WyJBcGkiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0VXNlckluZm8iLCJnZXRJbml0aWFsQ2FyZHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwibGluayIsIm5hbWUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcmRJZCIsImRhdGEiLCJhYm91dCIsInRpdGxlIiwiYm9vbGVhbiIsImF2YXRhciIsIkNhcmQiLCJjYXJkVGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlRGVsZXRlSWNvbiIsImhhbmRsZUxpa2VDb3VudCIsImhhbmRsZUxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfaWQiLCJfbGlrZXMiLCJsaWtlcyIsIl9jYXJkVGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJfaGFuZGxlRGVsZXRlSWNvbiIsIl9oYW5kbGVMaWtlQ291bnQiLCJfaGFuZGxlTGlrZUNsaWNrIiwiY2FyZFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9jYXJkIiwiX2NhcmRIZWFydEljb24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2NhcmRSZW1vdmVCdG4iLCJpZCIsIl9jYXJkSW1hZ2UiLCJfdGV4dCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIl9jYXJkTGlrZUNvdW50IiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJjb250YWlucyIsImNvdW50IiwiX2dldENhcmRUZW1wbGF0ZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiX2xpa2VDb3VudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dFcnJvck1lc3NhZ2UiLCJfaGlkZUVycm9yTWVzc2FnZSIsImlucHV0TGlzdCIsImJ1dHRvbiIsImlzVmFsaWQiLCJldmVyeSIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwiRVNDIiwid2hpY2giLCJjbG9zZSIsInRhcmdldCIsImNsb3Nlc3QiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsIl9oYW5kbGVTdWJtaXRGb3JtIiwiX2Zvcm0iLCJfaW5wdXRMaXN0IiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsImhhbmRsZXIiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX2NhcHRpb24iLCJzcmMiLCJhbHQiLCJTZWN0aW9uIiwiY2xhc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsInRpdGxlU2VsZWN0b3IiLCJfdXNlck5hbWUiLCJfdXNlclRpdGxlIiwiaW5pdGlhbENhcmRzIiwiZGVmYXVsdENvbmZpZyIsImVkaXRQcm9maWxlTW9kYWxXaW5kb3ciLCJhZGRDYXJkTW9kYWxXaW5kb3ciLCJvcGVuSW1nTW9kYWxXaW5kb3ciLCJkZWxldGVDYXJkTW9kYWxXaW5kb3ciLCJzZXRVc2VyQXZhdGFyTW9kYWxXaW5kb3ciLCJwcm9maWxlRWRpdEJ0biIsImFkZEJ0biIsInNldEF2YXRhckJ0biIsImFkZENhcmRDbG9zZUJ0biIsImlucHV0TmFtZSIsImlucHV0T2NjdXBhdGlvbiIsImFkZE5hbWUiLCJhZGRVcmwiLCJsaXN0IiwiYWRkQ2FyZEZvcm0iLCJlZGl0UHJvZmlsZUZvcm0iLCJNWUlEIiwibW9kYWxXaXRoSW1hZ2UiLCJzZXRFdmVudExpc3RlbmVycyIsImRlbGV0ZUZvcm0iLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiZ2V0VXNlckRhdGEiLCJ1c2VyRGF0YSIsImNhcmRTZWN0aW9uIiwicmVuZGVyQ2FyZCIsImNyZWF0aW5nQ2FyZEluZm8iLCJhZGRJdGVtIiwiZ2VuZXJhdGVDYXJkIiwicmVuZGVySXRlbXMiLCJhZGRGb3JtIiwicmVuZGVyTG9hZGluZyIsImFkZENhcmQiLCJyZXN1bHQiLCJuZXdDYXJkIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsImlzTG9hZGluZyIsIm1vZGFsIiwic2V0VXNlckF2YXRhciIsImNhcmQiLCJzZXREZWxldGVIYW5kbGVyIiwiZGVsZXRlQ2FyZCIsIm93bmVyIiwiaGlkZVJlbW92ZUJ0biIsInJlbmRlckxpa2UiLCJ3YXNMaWtlZCIsImNoYW5nZUxpa2VTdGF0dXMiLCJsaWtlIiwiZGVsZXRlTGlrZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJlZGl0Rm9ybSIsImVkaXRVc2VySW5mbyIsImVkaXRQcm9maWxlVmFsaWRhdG9yIiwiYWRkQ2FyZFZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJnZXRGb3JtSW5mbyJdLCJzb3VyY2VSb290IjoiIn0=
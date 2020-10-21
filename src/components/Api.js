class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        .catch((err) => console.log(err))
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        .catch((err) => console.log(err))
    }

    addCard({ link, name }) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch((err) => console.log(err))
    }
    
    deleteCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId, {
            headers: this._headers,
            method: "DELETE"
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        .catch((err) => console.log(err))
    }

    editUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.title
            })
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        .catch((err) => console.log(err))
    }

    changeLikeStatus(cardId, boolean) {
        if (boolean) {
            return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            headers: this._headers,
            method: "PUT"}) 
            .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
            .catch(err => console.log(err))

        } else {
            return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            headers: this._headers,
            method: "DELETE"})
            .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
            .catch(err => console.log(err))
        }
        }
    setUserAvatar(avatar){
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar
            })
        })
            .then((res) => {res.ok ? res.json() : Promise.reject('Error!' + res.statusText)})
            .catch((err) => console.log(err))
    }
}
export default Api;

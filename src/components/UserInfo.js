class UserInfo {
    constructor({ nameSelector, titleSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userTitle = document.querySelector(titleSelector);
    }

    getUserInfo() {
        return {name: this._userName.textContent, title: this._userTitle.textContent};
    }

    setUserInfo({ name, title }) {
        this._userName.textContent = name;
        this._userTitle.textContent = title;
    }
}

export default UserInfo;
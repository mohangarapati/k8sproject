const base_url = 'https://ezyattend.com.au/api';

function apiFetch(url, params = {}) {
    params.headers = params.headers ? params.headers : {};
    //params.headers.Authorization = `JWT ${getToken()}`;
  
    return new Promise((resolve, reject) => {
      fetch(`${base_url}${url}`, params)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                reject();
                logout()
            }
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });
    });
}

function apiFetchStream(url, params = {}) {
    params.headers = params.headers ? params.headers : {};
    //params.headers.Authorization = `JWT ${getToken()}`;
  
    return new Promise((resolve, reject) => {
      fetch(`${base_url}${url}`, params)
        .then(res => res.blob())
        .then(data => {
            if(data.error) {
                console.log(data.error)
                reject();
                logout()
            }
            resolve(data);
        });
    });
}

function getToken() {
    return window.localStorage.getItem("user_token");
}

function saveToken() {
    return window.localStorage.getItem("user_token");
}

function getCurrentUser() {
    const userdata = window.localStorage.getItem("user");
    if(userdata === undefined) {
        this.props.history.push('/')
        return;
    }
    console.log("user", userdata)
    return userdata !== undefined ? JSON.parse(userdata) : null;
}

function isAdmin() {
    return getCurrentUser() && getCurrentUser().role === 'admin';
}

function saveUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

function removeUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('user_token');
}

function logout() {
    removeUser();
    //window.location.reload();
}


export default {
    apiFetch,
    apiFetchStream,
    logout,
    isAdmin,
    saveUser,
    removeUser,
    saveToken,
    getToken,
    getCurrentUser
};
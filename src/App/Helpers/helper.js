const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user')) ?? null;


export {
    getUserFromLocalStorage
};
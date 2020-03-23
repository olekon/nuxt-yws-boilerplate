import RequestAxios from './requestAxios';

class Api {
    constructor(axios, errorFlags = {}) {
        this.request = new RequestAxios(axios, errorFlags);
    }

    // Example
    //
    // register(email, password) {
    //     return this.request.send('/register', 'post', { email, password });
    // }
}

export default Api;
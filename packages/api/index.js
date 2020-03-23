import RequestAxios from './requestAxios';

class Api {
    constructor(axios) {
        this.request = new RequestAxios(axios);
    }

    // Example:
    //
    // register(email, password) {
    //     return this.request.send('/register', 'post', { email, password });
    // }
}
export default Api;
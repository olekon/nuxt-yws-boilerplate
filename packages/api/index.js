import RequestAxios from './requestAxios';

class Api {
    constructor(axios) {
        this.request = new RequestAxios(axios);
    }

    // Example:
    //
    // getSome() {
    //     return this.request.send('/posts/1/', {}, 'get');
    // }
    //
    // postSome() {
    //     return this.request.send('/posts/', { title: 'foo', body: 'BODY!', userId: 1 }, 'post');
    // }
}

export default Api;
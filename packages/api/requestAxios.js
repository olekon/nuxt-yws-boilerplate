class RequestAxios {
    constructor(axios) {
        this.axios = axios;
    }

    send(url, body, method, queryParams) {
        return this.axios.request({
            url,
            method,
            params: queryParams,
            data: body
        })
    }
}

export default RequestAxios;
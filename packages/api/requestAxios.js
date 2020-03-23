const ServerErrorFlag = 'serverError';
const RequestErrorFlag = 'requestError';

/**
 *
 All API-related functions return either object with `body` property in case of success
 or object with `error` property in case something went wrong.
 See function @returns comments for specfiic details of `error` object
 */

/**
 * @typedef ApiResponse
 * @type {object}
 * @property {object} body - response body, available only in case of success
 * @property {object} error - response error, available only in case of failure.
 * If response code is 5XX, error is {serverError:true}
 * If response code is 4XX, error is {[errFlag]: true}, where errFlag is provided via errFlags properties
 */


class RequestAxios {
    /**
     * Creates RequestAxios instance
     * @param {Object} axios axios instance 
     * @param {Object} [errorFlags={}] string-string collection of flags that should be returned instead of numeric error codes.
     */
    constructor(axios, errorFlags = {}) {
        this.axios = axios;
        this.errorFlags = errorFlags;
    }

    /**
     * Sends request to specified url 
     * @param {String} url url realtive to axios.baseURL 
     * @param {String} method method name - get/post etc.
     * @param {Object} [body={}] key-value collection of request body params for POST/PUT/PATCH     
     * @param {Object} [errorFlags={}] string-string collection of flags that should be returned instead of numeric error codes. Merged with root errorFlags
     * @param {Object} [queryParams={}] key-value collection of query string params 
     * 
     * @returns {ApiResponse} response with either {body} or {error}.
     */
    send(url, method, body = {}, errorFlags = {}, queryParams = {}) {
        const errFlags = { ...this.errorFlags, ...errorFlags };

        return this.axios.request({
            url,
            method,
            params: queryParams,
            data: body,
        })
            .then(response => {
                return { body: response.data };
            })
            .catch(error => {
                return { error: this.createErrorResponse(error, errFlags) };
            });
    }

    createErrorResponse(error, errFlags) {
        if (error.response) {
            const { status } = error.response;
            // server responded with a status code that falls out of the range of 2xx
            if (status >= 500 && status <= 599) {
                return { [ServerErrorFlag]: true };
            } else {
                const errFlag = errFlags[status] || RequestErrorFlag;
                return { [errFlag]: true };
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js            
            console.log(error.request);
            return { [RequestErrorFlag]: true };
        }
        else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return { [RequestErrorFlag]: true };
        }
    }
}

export default RequestAxios;
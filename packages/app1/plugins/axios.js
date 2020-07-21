import cookies from 'js-cookie';
import https from 'https';

export default function ({ $axios }) {
    if(process.env.NODE_ENV === 'development') {
        // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
    }
    $axios.refreshCsrfToken = function() {
        this.setHeader('X-CSRFToken', cookies.get('csrftoken'));
    }; 
    $axios.refreshCsrfToken();
    //$axios.setHeader('X-CSRFToken', cookies.get('csrftoken'));
}
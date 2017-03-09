/**
 * Created by revenage on 3/9/17.
 */
import fetch from 'isomorphic-fetch';
// import Cookies from './cookies';
import store from '../../store';
import ACTIONS from '../../store/actions';


/**
 * Authorization header
 */
const getAuthHeader = () => ({
    // 'Authorization': 'Bearer ' + Cookies.get('_')
});

/**
 * Full header
 */
const getFullHeader = () => ({
    // ...getAuthHeader(),
    //...{'Content-Type': 'application/json'}
});

/**
 * If response code === 401 - user unauthorized = clear cookie
 */
const fetchMiddleware = (response) => {
    if (response.status && response.status == 401) {
        store.dispatch({
            type: ACTIONS.user_logout
        });
    }
    return response.json();
};

export {
    fetch,
    getAuthHeader,
    getFullHeader,
    fetchMiddleware
};

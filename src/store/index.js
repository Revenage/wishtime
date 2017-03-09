import {createStore, combineReducers, applyMiddleware} from 'redux';
import fetchMiddleware from './middlewares/fetch';
import * as reducers from './reducers';
// import Cookies from '../api/cookies';

import ACTIONS from './actions';

const appReducer = combineReducers(reducers);
//const appReducer = createStore(usersPage => usersPage);
const rootReducer = (state, action) => {
    if (action.type === ACTIONS.user_logout) {
        // Cookies.delete('_');
        state = {
            // currentUser: {
            //     ...state.currentUser,
            //     ...{token: !!0}
            // }
        };
    }
    return appReducer(state, action);
};

/* with Logger for actions */
// const createStoreWithMiddleware =
//     applyMiddleware(fetchMiddleware, logger)(createStore);

/* without Logger */
const createStoreWithMiddleware =
    applyMiddleware(fetchMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, {});

export default store;

/**
 * Created by reven on 12.04.2016.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';

const logger = createLogger();

const reducer = combineReducers(reducers);

const createStoreWithMiddleware =
    applyMiddleware(promisesMiddleware, logger)(createStore);

const store = createStoreWithMiddleware(reducer, {
    counter: 0
});

export default store;
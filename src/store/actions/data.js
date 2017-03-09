import fetch from '../middlewares/fetch'
import url from '../middlewares/urls'
import ACTIONS from './index'
import {testData} from '../middlewares/requests'

export function increaseCounter() {
  return {
    type: 'INCREASE_COUNTER'
  };
}

export function decreaseCounter() {
  return {
    type: 'DECREASE_COUNTER'
  };
}

export function resetCounter() {
  return {
    type: 'RESET_COUNTER'
  };
}

export const getData = () => {
  return {
    type: 'FETCH',
    actions: [
      ACTIONS.data_loading,
      ACTIONS.data_loaded,
      ACTIONS.data_load_failure
    ],
    promise: testData()
  };
};
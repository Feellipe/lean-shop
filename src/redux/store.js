import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [logger];

// criar a store com todos os reducers + os logs do middleware 
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
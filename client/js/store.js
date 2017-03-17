
import cheeseReducer from './reducers/cheese';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

export default createStore(cheeseReducer, applyMiddleware(thunk));

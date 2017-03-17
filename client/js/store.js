
import * as reducers from './reducers/cheese';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

export default createStore(reducers.cheeseReducer, applyMiddleware(thunk));

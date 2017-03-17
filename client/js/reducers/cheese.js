import * as actions from '../actions/cheese';

const initialSate = {
    cheeses: [],
    loading: false,
    error: null
}

const cheeseReducer = (state=initialSate, actions) => {
    if (action.type === actions.FETCH_CHEESE_REQUEST){
        return {...state, loading: true}
    }
    else if (action.type === actions.FETCH_CHEESE_SUCCESS) {
        return {...state, loading: false, error: null, cheeses: [...state.cheeses, action.cheeseData]}
    }
    else if (action.type === actions.FETCH_CHEESE_ERROR) {
        return {...state, error: action.error}
    }
    return state;
}

export default cheeseReducer;

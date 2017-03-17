import * as actions from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

    const cheeseReducer = (state=initialState, action) => {
    if (action.type === actions.FETCH_CHEESE_REQUEST){
        return {...state, loading: true}
    }
    else if (action.type === actions.FETCH_CHEESE_SUCCESS) {
        return {...state, loading: false, error: null, cheeses: action.cheeseData}
    }
    else if (action.type === actions.FETCH_CHEESE_ERROR) {
        return {...state, error: action.error}
    }
    return state;
}

export default cheeseReducer;

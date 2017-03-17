

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
    type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (cheeseData) => ({
    type: FETCH_CHEESE_SUCCESS,
    cheeseData
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => ({
    type: FETCH_CHEESE_ERROR,
    error
});

export const fetchCheeses = () => (dispatch) => {
    dispatch(fetchCheeseRequest());
    fetch('https://fullstack-cheese.herokuapp.com/')
        .then(response => {
            return response.json()
        })
        .then(data => dispatch(fetchCheeseSuccess(data)))
        .catch(error => dispatch(fetchCheeseError(error)));
}

export const fetchCheeses = (cheese) = (dispatch) => {
    fetch('http://localhost:8080/cheeses')
        return fetchCheeseRequest().then(
            response => response.json()
        )
        .then(data => dispatch(fetchCheeseSuccess(data)))
        .catch(error => dispatch(fetchCheeseError(error)));
}

export const = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => {
    type: FETCH_CHEESE_REQUEST
};

export const = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (cheeseData) => {
    type: FETCH_CHEESE_SUCCESS,
    cheeseData
};

export const = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => {
    type: FETCH_CHEESE_ERROR,
    error
};

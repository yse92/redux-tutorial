import React from 'react';
/*
    REDUCER
*/
const initState = {
    counter: 1,
}
const counterReducer = (state = initState, action) => {
    console.log(typeof action.payload);
    switch (action.type) {
        case "INCREMENT":
            return {...state, counter: state.counter+1};
        case "DECREMENT":
            return {...state, counter: state.counter-1};
        case "RESET":
            return {...initState};
        case "INC_PROPS":
            return {...state, counter: state.counter + Number(action.payload)};
        default:
            return state;
    }
};
export default counterReducer;

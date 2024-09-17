import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
    day: '', month: '', year: '', age: null,
}

const ageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INPUT' : 
            return {...state, [action.payload.field]: action.payload.value};
        case 'SET_AGE' : 
            return {...state, age: action.payload};
        default : 
            return state;
    }
};

export const store = createStore(ageReducer, applyMiddleware(thunk));
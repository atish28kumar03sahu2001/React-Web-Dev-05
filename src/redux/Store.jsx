import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";

const UserAge = {
    day: '', month: '', year: '', age: null,
};

const LeapYearState = {
    year: '', result: '',
};

const Multiplication = {
    number: '', range: '', result: []
}

const EvenOddR = {
    range1: '', range2: '', result: {evenNumbers: [], oddNumbers: []},
}

const PosNegState = {
    number: '', result: ''
}

const SwapState = {
    numA: '', numB: '', swappedA: '', swappedB: ''
};

const ageReducer = (state = UserAge, action) => {
    switch(action.type) {
        case 'SET_INPUT': 
            return {...state, [action.payload.field]: action.payload.value};
        case 'SET_AGE': 
            return {...state, age: action.payload};
        default: 
            return state;
    }
};

const LeapYearReducer = (state = LeapYearState, action) => {
    switch(action.type) {
        case 'SET_YEAR': 
            return { ...state, year: action.payload };
        case 'CHECK_LEAP_YEAR': 
            return { ...state, result: action.payload };
        default: 
            return state;
    }
};

const multiplicationReducer = (state = Multiplication, action) => {
    switch(action.type) {
        case 'SET_NUMBER' : 
            return {...state, number: action.payload};
        case 'SET_RANGE' : 
            return {...state, range: action.payload};
        case 'SET_RESULT' : 
            return {...state, result: action.payload};
        default: 
            return state;
    }
}

const EvenOddReducer = (state = EvenOddR, action) => {
    switch(action.type) {
        case 'SET_RANGE1' : 
            return {...state, range1: action.payload};
        case 'SET_RANGE2' : 
            return {...state, range2: action.payload};
        case 'SET_RESULT' : 
            return {...state, result: action.payload};
        default:
            return state;
    }
}

const PosNegReducer = (state = PosNegState, action) => {
    switch(action.type) {
        case 'SET_NUMBER' : 
            return {...state, number: action.payload};
        case 'SET_RESULT' : 
            return {...state, result: action.payload};
        default : 
            return state;
    }
}

const swapReducer = (state = SwapState, action) => {
    switch(action.type) {
        case 'SET_NUMBERS':
            return { ...state, numA: action.payload.numA, numB: action.payload.numB };
        case 'SWAP_NUMBERS':
            return { ...state, swappedA: action.payload.swappedA, swappedB: action.payload.swappedB };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    age: ageReducer,
    leapYear: LeapYearReducer,
    multiplication: multiplicationReducer,
    EvenOdd: EvenOddReducer,
    PosNeg: PosNegReducer,
    Swap: swapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
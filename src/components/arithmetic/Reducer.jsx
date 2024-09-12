export const initialState = {
    num1: 0, num2: 0, res: 0
}

export const Addition = "Addition";
export const Subtraction = "Subtraction";
export const Multiplication = "Multiplication";
export const Division = "Division";
export const Modulo = "Modulo";

export const ActionType = (operationType, num1, num2) => {
    return {
        type: operationType,
        payload: { num1, num2 }

    }
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case Addition : 
            return {...state, res: action.payload.num1 + action.payload.num2 };
        case Subtraction : 
            return {...state, res: action.payload.num1 - action.payload.num2 };
        case Multiplication : 
            return {...state, res: action.payload.num1 * action.payload.num2 };
        case Division : 
            return {...state, res: action.payload.num1 / action.payload.num2 };
        case Modulo : 
            return {...state, res: action.payload.num1 % action.payload.num2 };
        default:
            return state;
    }
}
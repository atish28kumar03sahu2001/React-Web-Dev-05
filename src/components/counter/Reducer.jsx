export const initialState = {
    count: 0
}

export const incrementAction = (value) => {
    return {
        type: "Increment",
        payload: value
    }
}

export const decrementAction = (value) => {
    return {
        type: "Decrement",
        payload: value
    }
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "Increment" : 
            return {
                ...state,
                count: state.count + action.payload
            }
        case "Decrement" : 
            return {
                ...state,
                count: state.count - action.payload
            }
        default : 
            return state;
    }
}
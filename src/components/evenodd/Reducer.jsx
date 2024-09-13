export const initialState = {
    num: 0,
    isEven: null,
};
export const CHECK_EVEN_ODD = "CHECK_EVEN_ODD";

export const ActionType = (operationType, num) => {
    return {
        type: operationType,
        payload: num,
    };
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case CHECK_EVEN_ODD:
            const isEven = action.payload % 2 === 0;
            return {
                ...state,
                num: action.payload,
                isEven,
            };
        default:
            return state;
    }
};

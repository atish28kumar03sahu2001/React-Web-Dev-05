export const initialState = {
    num1: 0, num2: 0, greatest: null, smallest: null
};

export const SET_NUM1 = "num1";
export const SET_NUM2 = "num2";
export const FIND_GREAT = "great";
export const FIND_SMALL = "small";

export const Reducer = (state, action) => {
    switch (action.type) {
        case SET_NUM1:
            return { ...state, num1: action.payload };
        case SET_NUM2:
            return { ...state, num2: action.payload };
        case FIND_GREAT:
            return { ...state, greatest: Math.max(state.num1, state.num2) };
        case FIND_SMALL:
            return { ...state, smallest: Math.min(state.num1, state.num2) };
        default:
            return state;
    }
};

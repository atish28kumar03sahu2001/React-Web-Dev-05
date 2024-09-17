# Age Of Person Example

## Store.jsx

```JAVASCRIPT
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
```

From the above code i used `React-Redux` and `Redux-Thunk` in `initialState` first we decalre our required variables with their initial values. After that in `ageReducer` function we call the `initialState` in **state** parameter and inside the function we use the `switch case` and we target the `action.type` where in case of `SET_INPUT` we capture the values from frontend form. In case of `SET_AGE` we capture the value of **age**.

## Actions.jsx

```JAVASCRIPT
export const setInput = (field, value) => ({
    type: 'SET_INPUT',
    payload: {field, value}
});

export const setAge = (age) => ({
    type: 'SET_AGE',
    payload: age
});
```

From the above code we exporrt the `setInput` and `setAge` function where i added the **type** and it's corresponded payload. In `setInput` we add the `SET_INPUT` so the it will capture the `day, month, year`. In `setAge` we add the `SET_AGE` so it will collect the age which is the output and it will display in the Web Browser.

```JAVASCRIPT
export const calculateAge = (day, month, year) => {
    return (dispatch) => {
        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        let ageYear = today.getFullYear() - birthDate.getFullYear();
        let ageMonth = today.getMonth() - birthDate.getMonth();
        let ageDay = today.getDate() - birthDate.getDate();

        if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
            ageYear--;
            ageMonth += 12;
        }

        if (ageDay < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDay += lastMonth.getDate();
        }

        const calculatedAge = `${ageYear} years, ${ageMonth} months, and ${ageDay} days`;
        dispatch(setAge(calculatedAge));
    }
}
```

From the above code we add the `calculateAge` action function where we took the `day, month, year` value as an parameter and we calculate the age and `day, month, year` will come from the `setInput` but in the end of the return function we dispatch the `setAge(calculatedAge)` and we sent the value of `calculatedAge` to browser so that user can see it's required output value.
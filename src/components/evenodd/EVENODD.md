# Even Or Odd Example

## Code Explanation

### Reducer.jsx

```JAVASCRIPT
export const initialState = {
    num: 0,
    isEven: null,
};
```
In the above code first we create the `initialState` for required Operation and we initialize two variable `num` user will give value to the assign variable. `isEven` where we wil got the result.

```JAVASCRIPT
export const CHECK_EVEN_ODD = "CHECK_EVEN_ODD";

export const ActionType = (operationType, num) => {
    return {
        type: operationType,
        payload: num,
    };
};
```
In the above code first we assign an Action which is `CHECK_EVEN_ODD` and we create a `ActionType` function where we return `num` to `payload` and in `type` user will assign the `operationType` which is `CHECK_EVEN_ODD`.

```JAVASCRIPT
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
```
In the above `Reducer` function we assign the `state` and `action` parameter. We use the `Switch Case` where we use the `isEven` and it will calculate whether the number is **even** or **odd** and in return we update the function.

### EvenOdd.jsx

```JAVASCRIPT
import React, { useReducer, useState } from "react";
import { ActionType, initialState, Reducer, CHECK_EVEN_ODD } from "./Reducer";

export const EvenOdd = () => {
    const [input, setInput] = useState(0);
    const [state, dispatch] = useReducer(Reducer, initialState);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const number = parseInt(input);
        if (!isNaN(number)) {
            dispatch(ActionType(CHECK_EVEN_ODD, number));
        }
    };
    return (
        <>
            <div>
                <form onSubmit={SubmitHandler}>
                    <input required type="text" placeholder="Enter Number" value ={input} onChange={e=>setInput(e.target.value)} />
                    <input type="submit" value="GO" />
                </form>
                {
                    state.isEven !== null && ( <p>The Number {state.num} is {state.isEven ? "Even" : "Odd"}</p> )
                }
            </div>
        </>
    );
}
```

1. In the above react code we create a form where user will give the input, and user will click on the submit button after inserting the data in input.

2. we assign a function to the form called `SubmitHandler` where we change the type of number from string to integer, and in condition we send the number to the `Reducer.jsx` by using `useReducer` hook. 

3. in below form in `p` tag we use ternary operator to check the `state.isEven` value so in `Reducer.jsx` where code will execute the logic and find the vaue of `isEven` it will send to the React code and we can see the value.
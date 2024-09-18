# Even & Odd Number From Range1 To Range2

## Store.jsx

```JAVASCRIPT
const EvenOddR = {
    range1: '', range2: '', result: {evenNumbers: [], oddNumbers: []},
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
```

The code defines a Redux reducer and an initial state to manage ranges and results for identifying even and odd numbers. Here's a breakdown:

1. **Initial State (`EvenOddR`)**: The state has three properties:
   - `range1` and `range2` represent the start and end values of a range.
   - `result` is an object with two arrays: `evenNumbers` and `oddNumbers`, which will store the results of the even and odd numbers calculated from the given range.

2. **Reducer (`EvenOddReducer`)**: The reducer listens for specific action types and updates the state accordingly:
   - **`SET_RANGE1`**: Updates the `range1` value in the state with the provided payload.
   - **`SET_RANGE2`**: Updates the `range2` value in the state with the provided payload.
   - **`SET_RESULT`**: Updates the `result` object in the state with the payload, which includes both even and odd numbers calculated from the given range.

The reducer ensures that the state is updated correctly based on the dispatched actions, managing the input ranges and storing the results (even and odd numbers) from those ranges.

## Actions.jsx

```JAVASCRIPT
export const setRange1 = (range1) => ({
    type: 'SET_RANGE1',
    payload: range1
})

export const setRange2 = (range2) => ({
    type: 'SET_RANGE2',
    payload: range2
})

export const EOsetResult = (result) => ({
    type: 'SET_RESULT',
    payload: result
})

export const calculateEvenOdd = (range1, range2) => (dispatch) => {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let i = range1; i <= range2; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    dispatch(EOsetResult({ evenNumbers, oddNumbers }));
};
```

Here's a more detailed explanation of the code:

1. **Action Creators**:
   - `setRange1` and `setRange2`: 
     - These are functions that create actions to set the values of `range1` and `range2` in the Redux state. 
     - When a user inputs a number, these action creators will be dispatched to update the corresponding part of the state (e.g., `range1` and `range2`).
     - The actions contain a `type` (e.g., `'SET_RANGE1'`) to describe what kind of change is happening and a `payload` (the value of `range1` or `range2`), which is the data being sent.

   - `EOsetResult`: 
     - This function is another action creator that is responsible for updating the `result` in the Redux state. 
     - It takes an object with `evenNumbers` and `oddNumbers` as its payload and updates the `result` part of the state.

2. **Thunk Function (`calculateEvenOdd`)**:
   - `calculateEvenOdd` is a thunk function, which means it returns a function that can be dispatched. This is a special feature of Redux Thunk that allows us to handle asynchronous actions or complex logic before dispatching actions.
   - It takes `range1` and `range2` as arguments and:
     - Initializes two arrays: `evenNumbers` and `oddNumbers`.
     - Loops through all the numbers from `range1` to `range2` (inclusive).
     - If a number is divisible by 2, it is considered even and pushed to the `evenNumbers` array.
     - Otherwise, it is considered odd and added to the `oddNumbers` array.
   - Once the loop is complete, the `EOsetResult` action is dispatched with an object containing both arrays (`{ evenNumbers, oddNumbers }`). This updates the Redux state with the calculated even and odd numbers.

### Example:
Imagine the user enters `range1 = 1` and `range2 = 10`. 
- The loop will check numbers from 1 to 10.
  - Even numbers: 2, 4, 6, 8, 10
  - Odd numbers: 1, 3, 5, 7, 9
- These arrays will then be dispatched to the Redux store and stored in the state as the result.
  
This logic allows the app to dynamically calculate and display even and odd numbers for any given range, while managing the state centrally using Redux.
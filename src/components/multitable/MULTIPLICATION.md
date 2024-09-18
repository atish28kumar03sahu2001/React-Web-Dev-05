# Multiplication Table Code Example

## Store.jsx

```JAVASCRIPT
const Multiplication = {
    number: '', range: '', result: []
}

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
```

The provided code defines a Redux reducer named `multiplicationReducer` that manages the state for a multiplication feature. The state comprises three properties: `number`, `range`, and `result`. The reducer handles three action types:

- `'SET_NUMBER'`: Updates the `number` property with the action's payload.
- `'SET_RANGE'`: Updates the `range` property with the action's payload.
- `'SET_RESULT'`: Updates the `result` property with the action's payload.

For any other action types, the reducer returns the current state without making changes. This setup ensures that the state is updated appropriately based on the dispatched actions related to the multiplication functionality.

## Actions.jsx

```JAVASCRIPT
export const setNumber = (number) => ({
    type: 'SET_NUMBER',
    payload: number
})

export const setRange = (range) => ({
    type: 'SET_RANGE',
    payload: range
})

export const setResult = (result) => ({
    type: 'SET_RESULT',
    payload: result
})

export const CalculateMultiplicationTable = (number, range) => (dispatch) => {
    const result = [];
    for(let i = 1; i <= range; i++) {
        result.push(`${number} * ${i} = ${number * i}`);
    }
    dispatch(setResult(result));
}
```

The code defines a set of Redux actions and a thunk action for managing the state of a multiplication table application. Here's a detailed explanation:

1. **Action Creators**:
   - **`setNumber`**: This function creates an action to update the `number` in the Redux state. It returns an action object with the type `'SET_NUMBER'` and a payload that contains the `number` value.
   - **`setRange`**: Similar to `setNumber`, this function creates an action to update the `range` value in the Redux state. It returns an action object with the type `'SET_RANGE'` and the payload as the `range`.
   - **`setResult`**: This function creates an action to store the results of the multiplication table in the Redux state. The action has the type `'SET_RESULT'` and a payload containing the `result`, which is an array of the multiplication results.

2. **Thunk Action (Asynchronous Action)**:
   - **`CalculateMultiplicationTable`**: This is a thunk action that allows for asynchronous logic, using Redux Thunk middleware. The function takes in two arguments, `number` and `range`, and performs a loop to calculate the multiplication table. It generates an array where each element is a string representing the multiplication result for a specific number and index (e.g., "2 * 1 = 2"). After the loop completes, the thunk dispatches the `setResult` action, passing the generated array as the payload. This updates the Redux store with the complete multiplication table results.

In summary, the action creators are responsible for creating actions that update specific parts of the state (number, range, result), and the thunk action (`CalculateMultiplicationTable`) handles the logic of generating a multiplication table and dispatching the results to the Redux state. This allows the app to handle both user input (number and range) and calculated output (multiplication results) in a managed state using Redux.
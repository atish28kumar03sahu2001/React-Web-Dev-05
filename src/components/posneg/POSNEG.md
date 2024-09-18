# Postive Negative Number Code Example

## Store.jsx

```JAVASCRIPT
const PosNegState = {
    number: '', result: ''
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
```

This code defines a Redux reducer function to manage a small piece of application state, specifically dealing with a `number` and a `result`. The initial state (`PosNegState`) is an object with two properties: `number`, which is initialized as an empty string, and `result`, which is also set to an empty string. The reducer function, `PosNegReducer`, takes two arguments: `state`, which defaults to `PosNegState` if no other state is provided, and `action`, an object representing what needs to happen to the state. The function uses a switch statement to handle different action types.

- **Initial State**: The `PosNegState` object has `number` and `result`, both initialized as empty strings.
- **Action Object**: The `action` passed to the reducer contains a `type` and `payload`. The `type` indicates what kind of update should be made, and the `payload` contains the data needed for that update.
- **SET_NUMBER Action**: If the action type is `'SET_NUMBER'`, the reducer updates the `number` property in the state using the value in `action.payload`.
- **SET_RESULT Action**: If the action type is `'SET_RESULT'`, the reducer updates the `result` property in the state with the value from `action.payload`.
- **Default Behavior**: If the action type does not match any defined cases, the reducer returns the current state unchanged.

This reducer is responsible for managing changes to the `number` and `result` properties based on specific dispatched actions.

## Actions.jsx

```JAVASCRIPT
export const SetPosNegNumber = (number) => ({
    type: 'SET_NUMBER',
    payload: number
})

export const CheckPosNeg = (number) => (dispatch) => {
    const result = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
    dispatch({
        type: 'SET_RESULT',
        payload: result
    })
}
```

The code defines two action creators for managing and updating state in a Redux store. These action creators are functions that return action objects to be dispatched to the Redux reducer, allowing the application state to be updated based on specific conditions. The actions are related to determining whether a given number is positive, negative, or zero.

### **SetPosNegNumber**
The `SetPosNegNumber` function is a simple action creator that returns an action object to set a number in the Redux state.

- **Purpose**: This function is used to update the `number` property in the state.
- **Action Object**: It returns an action object with:
  - **Type**: `'SET_NUMBER'`
  - **Payload**: The `number` passed as an argument, which will be stored in the state.

### **CheckPosNeg**
The `CheckPosNeg` function is a more complex action creator, known as a **thunk**, which allows for asynchronous operations or additional logic before dispatching an action.

- **Purpose**: It checks whether a number is positive, negative, or zero, then dispatches an action to update the `result` property in the state.
- **Logic**: 
  - If the `number` is greater than 0, the result is `'Positive'`.
  - If the `number` is less than 0, the result is `'Negative'`.
  - If the `number` is 0, the result is `'Zero'`.
- **Dispatching Action**: After determining the result, the function dispatches an action with:
  - **Type**: `'SET_RESULT'`
  - **Payload**: The result (`'Positive'`, `'Negative'`, or `'Zero'`), which will update the `result` property in the state.

These action creators facilitate the flow of updating the Redux store based on user input or logic, allowing the state to reflect whether a number is positive, negative, or zero.
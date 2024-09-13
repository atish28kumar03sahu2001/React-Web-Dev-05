# Arithmetic Operation Example

## Operand:

An **operand** is the data or value on which an operation is performed. It can be a variable, constant, or expression. In a mathematical or programming context, operands are the inputs for the operations. For example, in the expression `5 + 3`, both `5` and `3` are operands, as they are the values being operated on.

## Operator:

An **operator** is a symbol or function that specifies the type of operation to be performed on the operands. Operators perform tasks like addition, subtraction, multiplication, comparison, or logical operations. In the same expression `5 + 3`, the `+` symbol is the operator, as it defines the operation (addition) being applied to the operands.

### Summary:

- **Operands** are the data or values on which operations are performed.
- **Operators** are symbols or functions that perform operations on operands.

For example, in `a * b`, `a` and `b` are operands, and `*` (multiplication) is the operator.

## Code Explanation

### Reducer.jsx

```JAVASCRIPT
export const initialState = {
    num1: 0, num2: 0, res: 0
}
```
From the above code we create a initialState where we create input values and output values and initialize with `0`.

```JAVASCRIPT
export const Addition = "Addition";
export const Subtraction = "Subtraction";
export const Multiplication = "Multiplication";
export const Division = "Division";
export const Modulo = "Modulo";
```

From the above code after initialization we create the required actions for the code which are `Addition`, `Subtraction`, `Multiplication`, `Division`, `Modulo`.

```JAVASCRIPT
export const ActionType = (operationType, num1, num2) => {
    return {
        type: operationType,
        payload: { num1, num2 }

    }
}
```

In the above code we create a small optimization type thing where we create a `ActionType` and we give three parameters in `operationType` user will assign the required Operation which will goes to the `action.type` and in payload user will give the `input1` & `input2`.

```JAVASCRIPT
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
```

In the above we create the Reducer function where we assign the `state` and `action` and inside the Reducer function we use `Switch Case` and inside that we connect as per the `operationType` the code will do the logic with the `num1` and `num2`.

### Arithmetic.jsx

```JAVASCRIPT
<div className="ARTH_DIV_FRM_DIIV">
    <form onSubmit={HandleSubmit} className="ARTH_DIV_FRM_DIIV_D">
        <div>
            <input className="DIV_IP" required type="text" value={num1} onChange={e => setNum1(e.target.value)} />
            <select className="DIV_IP" name="option" value={operation} onChange={e => setOperation(e.target.value)}>
                <option value="Addition">+</option>
                <option value="Subtraction">-</option>
                <option value="Multiplication">*</option>
                <option value="Division">/</option>
                <option value="Modulo">%</option>
            </select>
            <input className="DIV_IP" required type="text" value={num2} onChange={e => setNum2(e.target.value)} />
        </div>
        <div>
            <input className="DIV_BTN" type="submit" value="=" />
            <input className="DIV_IP" readOnly typ="text" value={state.res} />
        </div>
    </form>
</div>
```

from the above react code in form we assign the two `input` tag where user will give the input values and in `select` tag user will choose what user want to do with those two input values and when user will click on `submit` value through `HandleSubmit` function code will send the `input1` and `input2` and the selected operation to the Reducer code.

```JAVASCRIPT
const [state, dispatch] = useReducer(Reducer, initialState);
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [operation, setOperation] = useState("Addition");

const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(ActionType(operation, parseInt(num1), parseInt(num2)));
}
```
in `HandleSubmit` function we are sending the `operation` and `num1 & num2` value to the Reducer function using `dispatch()`. In `const [state, dispatch] = useReducer(Reducer, initialState);` we call the **Reducer** and **initialState** from **Reducer.jsx**.
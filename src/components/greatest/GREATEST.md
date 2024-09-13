# GREATEST & SMALLEST NUMBER

## Reducer.jsx

```JAVASCRIPT
export const initialState = {
    num1: 0, num2: 0, greatest: null, smallest: null
};
```

From the above code first we initialize the `input1` & `input2` and we set `null` value to `greatest` and `smallest`. 

```JAVASCRIPT
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
```

After initialize the inputs, we create Required Actions where we create `SET_NUM1` & `SET_NUM2` actions are used to capture the inputs from user. Other two actions `FIND_GREAT` and `FIND_SMALL` used for to find the greatest and smallest number between two input.

In reducer function we set the parameter of state and action where we use `action.type` in switch case we set the inputs and value of greatest and smallest value to the state.

## Greatest.jsx

```JAVASCRIPT
export const Greatest = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: FIND_GREAT });
        dispatch({ type: FIND_SMALL });
    };

    return (
        <>
            <div className="DIV_GRT_FRM">
                <form onSubmit={HandleSubmit} className="FRM_GRT_F">
                    <input className="IP_FRM" required type="text" placeholder="Input1" value={state.num1} onChange={e => dispatch({ type: SET_NUM1, payload: parseInt(e.target.value) })} />
                    <input className="IP_FRM" required type="text" placeholder="Input2" value={state.num2} onChange={e => dispatch({ type: SET_NUM2, payload: parseInt(e.target.value) })} />
                    <input className="IP_FRM_BTN" type="submit" value="GO" />
                </form>

                <p className="GRT_P">{state.greatest !== null ? `Greatest: ${state.greatest}` : `Greatest: ${state.greatest}`}</p>
                <p className="GRT_P">{state.smallest !== null ? `Smallest: ${state.smallest}` : `Smallest: ${state.smallest}`}</p>
            </div>

            <div className="EO_CODE_DIV">
                {GREATEST.map(cde => (
                    <div key={cde.id} className="PROB_CODE_D_C">
                        <SyntaxHighlighter language="javascript" style={atelierForestDark} codeTagProps={{ style: { fontSize: '14px' } }}>
                            {cde.code}
                        </SyntaxHighlighter>
                        <Copy code={cde.code} />
                    </div>
                ))}
            </div>
        </>
    );
};
```

From the above code we use the `useReducer` hook and we call the `initialState` and `Reducer` from **Reducer.jsx**. In form on `onChange` attribute we set the input value to the `SET_NUM1` and `SET_NUM2` so that in **Reducer.jsx** it will find the greatest and smallest number and in below `p` tag it will display the values using `Ternary Operator`.
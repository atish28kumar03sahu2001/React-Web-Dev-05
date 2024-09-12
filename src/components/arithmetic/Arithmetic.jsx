import React, { useReducer, useState } from "react";
import { ActionType, initialState, Reducer } from "./Reducer";
import "../styles/Arithmetic.css";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Arithmetic1 } from "../code/Code";
import { Copy } from "../pages/Copy";
export const Arithmetic = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState("Addition");

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(ActionType(operation, parseInt(num1), parseInt(num2)));
    }
    return (
        <>
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
            <div className="PROB_CODE_D">
                {
                    Arithmetic1.map(cde => (
                        <div key={cde.id} className="PROB_CODE_D_C">
                            <SyntaxHighlighter language="javascript" style={atelierForestDark} codeTagProps={{ style: { fontSize: '14px' } }} >
                                {cde.code}
                            </SyntaxHighlighter>
                            <Copy code={cde.code} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
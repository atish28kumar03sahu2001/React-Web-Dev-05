import React, { useReducer, useState } from "react";
import { ActionType, initialState, Reducer, CHECK_EVEN_ODD } from "./Reducer";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { EVENODD } from "../code/Code";
import { Copy } from "../pages/Copy";
import '../styles/EvenOdd.css';
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
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Even & Odd Number</h1>
            </div>
            <div className="DIV_FORM_D_EO">
                <form onSubmit={SubmitHandler} className="DIV_FORM_D_EO_FRM">
                    <input className="FRM_IP" required type="text" placeholder="Enter Number" value ={input} onChange={e=>setInput(e.target.value)} />
                    <input className="FRM_BTN" type="submit" value="GO" />
                </form>
                {
                    state.isEven !== null && ( <p className="EO_P">The Number {state.num} is {state.isEven ? "Even" : "Odd"}</p> )
                }
            </div>
            <div className="EO_CODE_DIV">
                {
                    EVENODD.map(cde => (
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
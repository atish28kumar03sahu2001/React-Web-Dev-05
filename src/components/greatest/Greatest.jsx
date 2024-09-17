import React, { useReducer } from "react";
import { FIND_GREAT, FIND_SMALL, initialState, Reducer, SET_NUM1, SET_NUM2 } from "./Reducer";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { GREATEST } from "../code/Code";
import { Copy } from "../pages/Copy";
import '../styles/Greatest.css';

export const Greatest = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: FIND_GREAT });
        dispatch({ type: FIND_SMALL });
    };

    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Greatest & Smalles Number</h1>
            </div>
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

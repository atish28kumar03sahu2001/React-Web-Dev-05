import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SetPosNegNumber, CheckPosNeg} from '../../redux/Actions';
import '../styles/Posneg.css';
import '../styles/Leapyear.css';
import { POSNEG } from "../code/Code";
import { Copy } from "../pages/Copy";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Posneg = () => {
    const dispatch = useDispatch();
    const {result} = useSelector((state)=>state.PosNeg);
    const [input, setInput] = useState('');
    const HandleSubmit = (e) => {
        e.preventDefault();
        const num = parseInt(input);
        if(!isNaN(num)) {
            dispatch(SetPosNegNumber(num));
            dispatch(CheckPosNeg(num))
        }
    }
    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Positive Negative Number</h1>
            </div>
            <div className="DIV_FRM_POS_NEG">
                <form onSubmit={HandleSubmit}>
                    <input className="POS_NEG_IP" required type="text" placeholder="Number" id="number" name="number" value={input} onChange={e=>setInput(e.target.value)} />
                    <input className="POS_NEG_BTN" type="submit" value="GO" />
                </form>
                <p className="POS_NEG_P">{result}</p>
            </div>
            <div className="LEAP_CODE_DIV">
            {POSNEG.map(cde => (
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
}
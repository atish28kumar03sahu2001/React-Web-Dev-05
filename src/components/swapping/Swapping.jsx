import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setNumbers, swapNumbers} from '../../redux/Actions';
import '../styles/Swapping.css';
import '../styles/Leapyear.css';
import { SWAPPING, SWAPPING1 } from "../code/Code";
import { Copy } from "../pages/Copy";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Swapping = () => {
    const dispatch = useDispatch();
    const {swappedA, swappedB} = useSelector((state) => state.Swap);

    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedNumA = parseInt(numA);
        const parsedNumB = parseInt(numB);

        if (!isNaN(parsedNumA) && !isNaN(parsedNumB)) {
            dispatch(setNumbers(parsedNumA, parsedNumB));
            dispatch(swapNumbers());
        }
    }
    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Swapping Of Number</h1>
            </div>
            <div className="SWAP_FRM_DIV">
                <form onSubmit={handleSubmit} className="SWAP_FRM_FORM">
                    <label className="SWAP_LBL" htmlFor="numA">A = </label>
                    <input className="SWAP_IP" required type="text" id="numA" name="numA" value={numA} onChange={e=>setNumA(e.target.value)} />

                    <label className="SWAP_LBL" htmlFor="numB">B = </label>
                    <input className="SWAP_IP" required type="text" id="numB" name="numB" value={numB} onChange={e=>setNumB(e.target.value)} /><br />

                    <input className="SWAP_BTN" type="submit" value="GO" />
                </form>
                <p className="SWAP_P">{`Swapped A: ${swappedA} <-> Swapped B: ${swappedB}`}</p>
            </div>
            <div className="LEAP_CODE_DIV">
            {SWAPPING.map(cde => (
                    <div key={cde.id} className="PROB_CODE_D_C">
                        <SyntaxHighlighter language="javascript" style={atelierForestDark} codeTagProps={{ style: { fontSize: '14px' } }}>
                            {cde.code}
                        </SyntaxHighlighter>
                        <Copy code={cde.code} />
                    </div>
                ))}
            </div>
            <div className="SWAP_CODE_DIV">
            {SWAPPING1.map(cde => (
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
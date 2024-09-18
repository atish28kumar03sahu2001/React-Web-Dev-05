import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalculateMultiplicationTable, setNumber, setRange } from "../../redux/Actions";
import '../styles/Multiplication.css';
import '../styles/Leapyear.css';
import { TableMultiplication } from "../code/Code";
import { Copy } from "../pages/Copy";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Multiplication = () => {
    const dispatch = useDispatch();

    const result = useSelector((state)=>state.multiplication.result);

    const [inputs, setInputs] = useState({number: '', range: ''});

    const HandleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => ({
            ...prev,
            [name] : value
        }));

        if(name === 'number'){
            dispatch(setNumber(value))
        } else if (name === 'range') {
            dispatch(setRange(value));
        }
    }

    const HandleSubmit = e => {
        e.preventDefault();
        const {number, range} = inputs;
        if(number && range) {
            dispatch(CalculateMultiplicationTable(Number(number), Number(range)));
        }
    }
    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Multiplication Table</h1>
            </div>
            <div className="MULT_DIV_FRM_D">
                <form onSubmit={HandleSubmit} className="MULT_DIV_FRM_D_FORM">
                    <div className="FRM_IP_LBL_DIV">
                        <label className="MUL_LBL" htmlFor="number">Number</label>
                        <input className="MUL_IP" required type="text" placeholder="INPUT1" id="number" name="number" value={inputs.number} onChange={HandleChange} />

                        <label className="MUL_LBL" htmlFor="range">Range</label>
                        <input className="MUL_IP" required type="text" placeholder="INPUT2" id="range" name="range" value={inputs.range} onChange={HandleChange} />
                    </div>
                    <input className="MULT_BTN" type="submit" value="APPLY" />
                </form>
            </div>
            <div className="TABLE_DIV">
                <div className="TABLE_DIV_T">
                {
                    result.length > 0 ? (
                        result.map((res, index) => <p className="DIV_MULT_TABLE_P" key={index}>{res}</p>)
                    ) : (
                        <p className="DIV_MULT_TABLE_P">No Results To Display</p>
                    )
                }
                </div>
            </div>
            <div className="LEAP_CODE_DIV">
            {TableMultiplication.map(cde => (
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
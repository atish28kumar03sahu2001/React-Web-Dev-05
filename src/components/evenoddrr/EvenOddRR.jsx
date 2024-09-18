import React, { useState } from "react";
import { calculateEvenOdd, setRange1, setRange2 } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import '../styles/EvenOddR.css';
import '../styles/Leapyear.css';
import { EvenOddR } from "../code/Code";
import { Copy } from "../pages/Copy";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const EvenOddRR = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.EvenOdd.result);
    const [ranges, setRanges] = useState({range1: '', range2: ''});

    const HandleChange = e => {
        const {name, value} = e.target;
        setRanges(prev => ({...prev, [name]:value}));
        if(name === 'range1') {
            dispatch(setRange1(Number(value)));
        } else if (name === 'range2') {
            dispatch(setRange2(Number(value)));
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const { range1, range2 } = ranges;
        if (range1 && range2) {
            dispatch(calculateEvenOdd(Number(range1), Number(range2)));
        }
    };
    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Even & Odd From Range</h1>
            </div>
            <div className="EV_ODD_DIV_FRM">
                <form onSubmit={HandleSubmit} className="EV_ODD_DIV_FRM_FORM">
                    <div className="DIV_FRM_OD_EV">
                        <input className="ODD_EV_IP" required type="text" placeholder="INPUT1" id="range1" name="range1" value={ranges.range1} onChange={HandleChange} />
                        <p className="ODD_EV_P">TO</p>
                        <input className="ODD_EV_IP" required type="text" placeholder="INPUT2" id="range2" name="range2" value={ranges.range2} onChange={HandleChange} />
                    </div>
                    <input className="ODD_EV_BTN" type="submit" value="CHECK" />
                </form>
                <div>
                    <h3 className="EV_LIST_P">Even Numbers</h3>
                    <div className="EV_LIST">
                        {result.evenNumbers.length > 0 ? (
                            result.evenNumbers.map((num, index) => <p className="EV_LIST_P" key={index}>{num}</p>)
                        ) : (
                            <p className="EV_LIST_P">No Even Numbers</p>
                        )}
                    </div>
                    <h3 className="EV_LIST_P">Odd Numbers</h3>
                    <div className="EV_LIST">
                        {result.oddNumbers.length > 0 ? (
                            result.oddNumbers.map((num, index) => <p className="EV_LIST_P" key={index}>{num}</p>)
                        ) : (
                            <p className="EV_LIST_P">No Odd Numbers</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="LEAP_CODE_DIV">
            {EvenOddR.map(cde => (
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
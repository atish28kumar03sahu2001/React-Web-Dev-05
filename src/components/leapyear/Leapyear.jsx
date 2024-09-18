import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLeapYear, setYear } from "../../redux/Actions";
import '../styles/Leapyear.css';
import { LeapYear } from "../code/Code";
import { Copy } from "../pages/Copy";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Leapyear = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.leapYear.result);
    const year = useSelector((state) => state.leapYear.year);

    const HandleChange = (e) => {
        dispatch(setYear(e.target.value));
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(year !== "") {
            dispatch(checkLeapYear(Number(year)));
        }
    }
    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Leap Year Or Not</h1>
            </div>
            <div className="DIV_LEAP_D">
                <form onSubmit={HandleSubmit} className="DIV_LEAP_D_FRM">
                    <div>
                        <label className="LEAP_LBL" htmlFor="year">Year</label>
                        <input className="LEAP_IP" required type="text" placeholder="YEAR" id="year" name="year" value={year} onChange={HandleChange} />
                    </div>
                    <input className="LEAP_BTN" type="submit" value="Check" />
                </form>
                <p className="LEAP_P_PP">{result}</p>
            </div>
            <div className="LEAP_CODE_DIV">
            {LeapYear.map(cde => (
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
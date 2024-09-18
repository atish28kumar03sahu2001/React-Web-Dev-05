import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateAge, setInput } from "../../redux/Actions";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../styles/Ageper.css';
import { Age_Person } from "../code/Code";
import { Copy } from "../pages/Copy";
export const Ageper = () => {
    const dispatch = useDispatch();
    const day = useSelector((state) => state.age.day);
    const month = useSelector((state) => state.age.month);
    const year = useSelector((state) => state.age.year);
    const age = useSelector((state) => state.age.age);

    const HandleChange = (e) => {
        const {name, value} = e.target;
        dispatch(setInput(name, value));
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(day && month && year){
            dispatch(calculateAge(day, month, year));
        }
    }

    return (
        <>
            <div className="AGE_DIV_HEAD"><h1 className="AGE_DIV_HEAD_H1">Age Of Person</h1></div>
            <div className="AGE_DIV_HEAD_CALC">
                <form onSubmit={HandleSubmit} className="AGE_CALC_FRM">
                    <div className="AGE_CALC_FRM_DIV">
                        <div className="AGE_CALC_FRM_DIV_LIP">
                            <label className="AGE_cALC_FRM_LBL" htmlFor="day">Day</label>
                            <input className="AGE_CALC_FRM_IP" required type="text" inputMode="numeric" placeholder="DAY" id="day" name="day" value={day} onChange={HandleChange} />
                        </div>

                        <div className="AGE_CALC_FRM_DIV_LIP">
                            <label className="AGE_cALC_FRM_LBL" htmlFor="month">Month</label>
                            <input className="AGE_CALC_FRM_IP" required type="text" inputMode="numeric" placeholder="MONTH" id="month" name="month" value={month} onChange={HandleChange} />                            
                        </div>
                        <div className="AGE_CALC_FRM_DIV_LIP">   
                            <label className="AGE_cALC_FRM_LBL" htmlFor="year">Year</label>
                            <input className="AGE_CALC_FRM_IP" required type="text" inputMode="numeric" placeholder="YEAR" id="year" name="year" value={year} onChange={HandleChange} />
                        </div>
                    </div>
                    <input className="SBMT_AGE_BTN" type="submit" value="AGE OF USER" />
                </form>
                <p className="AGE_CALC_P">Your Age: {age ? age : "Please Enter Your Birth Date"}</p>
            </div>
            <div className="AGE_cALC_CODE_DIV">
            {Age_Person.map(cde => (
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
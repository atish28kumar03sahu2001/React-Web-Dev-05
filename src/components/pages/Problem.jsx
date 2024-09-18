import React from "react";
import { Link } from "react-router-dom";
import '../styles/Problem.css';
export const Problem = () => {
    return (
        <>
            <div className="PR_LS_DIV"><h1 className="PR_LS_DIV_H1">Problem List</h1></div>
            <div className="LIST_DIV_LINK">
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/counter">Increment & Decrement Counter</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/arithmetic">Arithmetic Operation</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/evenodd">Even & Odd Number</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/greatest">Greatest & Smallest Number</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/ageofperson">Age Of A Person</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/leapyear">Leap Year Or Not</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/multiplication">Multiplication Table</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/evenoddrr">Even Or Odd Number From R1 to R2</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/positivenegative">Positive Or Negative Number</Link></div>
                <div className="LIST_DIV_LINK_D"><Link className="LNK_DIV_LNK" to="/swapping">Swapping Of Two Numbers</Link></div>
            </div>
        </>
    );
}
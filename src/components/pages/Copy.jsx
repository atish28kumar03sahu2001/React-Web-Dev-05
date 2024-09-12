import React from "react";
import '../styles/Copy.css';
export const Copy = ({code}) => {
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            console.log("Code Coppied!");
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    };
    return (
        <>
            <div className='PROB_CODE_DIV_CODE_BTN'>
                <button className='PROB_CODE_DIV_CODE_BTN_btn' onClick={() => copyToClipboard(code)}>COPY</button>
            </div>
        </>
    );
}
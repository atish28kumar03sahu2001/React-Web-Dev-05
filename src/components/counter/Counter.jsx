import React, { useReducer } from 'react';
import '../styles/Counter.css';
import { decrementAction, incrementAction, initialState, Reducer } from './Reducer';
import { Counter1, Counter2 } from '../code/Code';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const Increment = () => {
        dispatch(incrementAction(1));
    };

    const Decrement = () => {
        dispatch(decrementAction(1));
    };
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            console.log("Code Coppied!");
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    };

    return (
        <>
            <div className='PROB_HEAD_DIV'>
                <h1 className='PROB_HEAD_DIV_H1'>Increment & Decrement Counter</h1>
            </div>
            <div className='PROB_CN_DIV'>
                <button onClick={Increment} className='PROB_CN_DIV_BTN'>+</button>
                <h1 className='PROB_HEAD_DIV_H1'>{state.count}</h1>
                <button onClick={Decrement} className='PROB_CN_DIV_BTN'>-</button>
            </div>
            <div className='PROB_CODE_DIV'>
                {Counter1.map(cnt => (
                    <div key={cnt.id} className='PROB_CODE_DIV_CODE'>
                        <SyntaxHighlighter language="javascript" style={atelierForestDark} codeTagProps={{ style: { fontSize: '14px' } }} >
                            {cnt.code}
                        </SyntaxHighlighter>
                        <div className='PROB_CODE_DIV_CODE_BTN'>
                            <button className='PROB_CODE_DIV_CODE_BTN_btn' onClick={() => copyToClipboard(cnt.code)}>COPY</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='PROB_CODE_DIV'>
                {Counter2.map(cnt => (
                    <div key={cnt.id} className='PROB_CODE_DIV_CODE'>
                        <SyntaxHighlighter language="javascript" style={atelierForestDark} codeTagProps={{ style: { fontSize: '14px' } }}>
                            {cnt.code}
                        </SyntaxHighlighter>
                        <div className='PROB_CODE_DIV_CODE_BTN'>
                            <button className='PROB_CODE_DIV_CODE_BTN_btn' onClick={() => copyToClipboard(cnt.code)}>COPY</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

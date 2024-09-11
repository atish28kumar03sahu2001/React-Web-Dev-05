import React, { useReducer } from 'react';
import '../styles/Counter.css';
import { decrementAction, incrementAction, initialState, Reducer } from './Reducer';

export const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const Increment = () => {
        dispatch(incrementAction(1));
    }
    const Decrement = () => {
        dispatch(decrementAction(1));
    }
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
        </>
    );
}
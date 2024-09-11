import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Welcome} from './components/pages/Welcome';
import {Header} from './components/pages/Header';
import {Footer} from './components/pages/Footer';
import { Problem } from './components/pages/Problem';
import { Counter } from './components/counter/Counter';
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/Problem" element={<Problem />} />
                    <Route path='/counter' element = {<Counter />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
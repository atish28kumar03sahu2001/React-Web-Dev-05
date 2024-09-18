import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Welcome} from './components/pages/Welcome';
import {Header} from './components/pages/Header';
import {Footer} from './components/pages/Footer';
import { Problem } from './components/pages/Problem';
import { Counter } from './components/counter/Counter';
import { Arithmetic } from './components/arithmetic/Arithmetic';
import { EvenOdd } from './components/evenodd/EvenOdd';
import { Greatest } from './components/greatest/Greatest';
import { Ageper } from './components/ageofperson/Ageper';
import { Leapyear } from './components/leapyear/Leapyear';
import { Multiplication } from './components/multitable/Multiplication';
import { EvenOddRR } from './components/evenoddrr/EvenOddRR';
import { Posneg } from './components/posneg/Posneg';
import { Swapping } from './components/swapping/Swapping';
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/Problem" element={<Problem />} />
                    <Route path='/counter' element = {<Counter />} />
                    <Route path="/arithmetic" element={<Arithmetic />} />
                    <Route path="/evenodd" element={<EvenOdd />} />
                    <Route path="/greatest" element={<Greatest />} />
                    <Route path="/ageofperson" element={<Ageper />} />
                    <Route path="/leapyear" element={<Leapyear />} />
                    <Route path="/multiplication" element={<Multiplication />} />
                    <Route path="/evenoddrr" element={<EvenOddRR />}  />
                    <Route path="/positivenegative" element={<Posneg />} />
                    <Route path="/swapping" element={<Swapping />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
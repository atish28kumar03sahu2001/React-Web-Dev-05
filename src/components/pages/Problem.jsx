import React from "react";
import { Link } from "react-router-dom";
export const Problem = () => {
    return (
        <>
            <h1>List</h1>
            <Link to="/counter">1. Increment & Decrement Operator</Link><br />
            <Link to="/arithmetic">2. Arithmetic Operation</Link><br />
            <Link to="/evenodd">3. Even & Odd Number</Link><br />
            <Link to="/greatest">4. Greatest & Smallest Number</Link><br />
            <Link>5. Age Of A Person</Link><br />
            <Link>6. Leap Year Or Not</Link><br />
            <Link>7. Multiplication Table</Link><br />
            <Link>8. Even Or Odd Number From R1 to R2</Link><br />
            <Link>9. Positive Or Negative Number</Link><br />
            <Link>10. Swapping Of Two Numbers</Link><br />
            <Link>11. Fibonacci Series</Link><br />
            <Link>12. Average (Mean), Mode & Median Of Numbers</Link><br />
        </>
    );
}
import React from "react";
import '../styles/Welcome.css';
import { Link } from "react-router-dom";
export const Welcome = () => {
    return (
        <>
            <div className="DIV_WEL_D">
                <p className="DIV_WEL_D_W">Welcome</p>
                <p className="DIV_WEL_D_W">To</p>
                <p className="DIV_WEL_D_W">My Problem Solver</p>
            </div>
            <div className="DIV_ABT_D">
                <p className="DIV_WEL_D_W">About Section</p>
                <p className="DIV_ABT_D_PP">A React-based interactive platform that brings mathematical concepts to life through practical examples and visualizations. This project showcases various mathematical theories, formulas, and problem-solving techniques, offering an intuitive, hands-on learning experience for users to explore and solve problems in real-time. Perfect for students, educators, and math enthusiasts alike. Built with React, the platform offers a smooth and responsive user interface, optimized for both desktop and mobile devices. Its modular design ensures that new mathematical topics and concepts can be added easily, making it a scalable and ever-evolving learning tool. By incorporating step-by-step solutions and hints, the platform helps users build confidence and improve their problem-solving skills.</p>
            </div>
            <div className="DIV_LNK_D">
                <Link className="DIV_LNK_D_L" to="/Problem">Click Here!</Link>
            </div>
        </>
    );
}
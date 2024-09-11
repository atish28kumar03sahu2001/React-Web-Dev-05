import React from "react";
import '../styles/Footer.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
export const Footer = () => {
    return(
        <>
            <div id="content"></div>
            <div className='FOOTER_DIV'>
                <div className='FOOTER_DIV_TSD'><p className='FOOTER_DIV_TSD_P'>My Problem Solver</p></div>
                <div className='FOOTER_DIV_TSD'><p className='FOOTER_DIV_TSD_CR'>&copy; {new Date().getFullYear()} TrendScribe. All Rights Reserved.</p></div>
                <div className='FOOTER_DIV_ICON'>
                    <a href="https://facebook.com" target="_blank"><FaFacebook size={25} color="white" /></a>
                    <a href="https://twitter.com" target="_blank"><FaSquareXTwitter size={25} color="white" /></a>
                    <a href="https://instagram.com" target="_blank"><FaSquareInstagram size={25} color="white" /></a>
                    <a href="https://linkedin.com" target="_blank"><FaLinkedin size={25} color="white" /></a>
                </div>
            </div>
        </>
    );
}
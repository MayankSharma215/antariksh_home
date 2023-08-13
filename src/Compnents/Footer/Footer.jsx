import React from "react";
import './Footer.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitterX from './TwitterX.png';
import logo from './logo.png';

const Footer = () => {
    return ( 
        <div className="footer">
         <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" className='socialMedia'/></a>
         <a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitterX} alt="twitterX" className='socialMedia'/></a>
         <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" className='socialMedia'/></a>
         <img src={logo} alt="logo" id="logo" />  
        </div>
     );
}
 
export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo2 from '../assets/logo2.png'
import './navbar.css'
import { useState } from "react";
import rasm12 from '../assets/rasm12.png'
  
function Navbar({ onSearch }) {
  return (
    <>
      <nav className="navbar">
        <img src={rasm12}/>
        <ul className="navbar1">
          <li><Link to="/">organick</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/page">Pages</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
     
        <div className="icons">
          <form className="navbarinput">
            <input type="text" placeholder="search from here..."/>
          </form>
          <img src={logo2} />
        </div>
      </nav>
    </>
  );
}

export default Navbar
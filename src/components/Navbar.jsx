import React, { useState } from 'react'; 
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const {darkMode, setDarkMode} = useDarkMode(toggleMode);
  const toggleMode = event => {
    event.preventDefault();
setDarkMode(!darkMode)  
};

return (
  <nav className="navbar">

  <h1>
  Kryptonite
  </h1>
  <div className="dark-mode-toggle">
  <div onClick={toggleMode className={darkMode ? 'toggle toggled' : 'toggle'}}>  </div>
  </div>
  </nav>
)}


export default Navbar
import React from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div>
      <h1>This is navbar</h1>
      <img
        src={logo}
        alt="Track2Hired Logo"
        className="w-[250px] h-[150px] object-contain"
      />
    </div>
  );
};

export default Navbar;

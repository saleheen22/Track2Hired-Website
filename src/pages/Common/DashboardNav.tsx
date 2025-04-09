import React, { useContext, useState } from 'react';
import logo from '../../assets/logo_white.png';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router';


import { Link } from 'react-router';
const DashboardNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {user} = useContext(AuthContext);
  return (
    <div className= "sticky top-0 z-50 bg-[rgb(14_49_98/var(--tw-bg-opacity,1))] text-white  ">
     
     
      
 <div className="relative flex justify-between items-center p-4 m-0">
      {/* Left side (Logo or brand) */}
      <div className="logo px-2 pl-12 cursor-pointer flex justify-between " > 
   
        <img
        src={logo}
        alt="Track2Hired Logo"
        className="md:h-9 h-12 w-auto mr-2 object-contain"
      />
      <h1 className="flex justify-center text-center text-bold my-auto text-3xl font-bold
 ">Track2Hired</h1>
      </div>

    
        


   

    
      <p>{user?.displayName}</p>

  
</div>

      {/* Hamburger / Close button (Mobile only) */}
      <div
        onClick={toggleMenu}
        className="hamburger block md:hidden cursor-pointer bg-gray-100 px-2 py-1 rounded"
      >
        {isOpen ? "this is close" : "this is hamburger"}
      </div>

      {/*
      The mobile dropdown menu is always present in the DOM,
      but we toggle classes to animate it in/out instead of removing it.
    */}
      <div
        className={`
        absolute top-full left-0 w-full z-50 bg-white shadow-md
        transform transition-all duration-500 ease-in-out origin-top
        ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
      >
        <div className="p-4 bg-base-200">
          <h1 className="mt-4">this is menu bar #1</h1>
          <h1 className='my-5'>this is menu bar #2</h1>
          <h1>this is menu bar #3</h1>
          <h1>this is menu bar #4</h1>
        </div>
      </div>
    </div>
    
  );
};

export default DashboardNav;

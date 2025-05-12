import React, { useContext, useState } from 'react';
import logo from '../../assets/logo_blue_resized.png';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Link } from 'react-router';
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menu: string[] = [
    'Home',
    'Features',
    'Extension',
    'AI Tools',
    'About Us',
  ];
  const { user } = useContext(AuthContext);
  return (
    <div className=" sticky top-0 z-50 bg-base-200  ">
      <div className="relative flex justify-between items-center p-4 m-0 max-w-[1286px] mx-auto">
        {/* Left side (Logo or brand) */}
        <div className="logo px-2 pl-12 cursor-pointer flex justify-between">
          <img
            src={logo}
            alt="Track2Hired Logo"
            className="h-6 sm:h-9 md:h-12 w-auto mr-2 object-contain"
          />
          <h1
            className="flex justify-center text-center text-bold my-auto  text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500
 "
          >
            Track2Hired
          </h1>
        </div>

        {/* Middle (Desktop links) */}
        <div className="links hidden xl:flex justify-around gap-2 sm:gap-4 md:gap-8 lg:gap-10">
          {menu.map((menu, idx) => {
            if (menu === 'Features') {
              return (
                <a className="text-xl" key={idx} href="#features">
                  {menu}
                </a>
              );
            } else if (menu === 'Extension') {
              return (
                <a className="text-xl" key={idx} href="#extension">
                  {menu}
                </a>
              );
            } else if (menu === 'AI Tools') {
              return (
                <a className="text-xl" key={idx} href="#aitools">
                  {menu}
                </a>
              );
            } else if (menu === 'Home') {
              return (
                <a className="text-xl" key={idx} href="#">
                  {menu}
                </a>
              );
            } else if (menu === 'About Us') {
              return (
                <a className="text-xl" key={idx} href="#about">
                  {menu}
                </a>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* Right (Desktop sign in) */}
        <div className="sign hidden xl:block">
          {user ? (
            location.pathname.includes('/dashboard') ? (
              <p>{user.displayName}</p>
            ) : (
              <p>
                <Link to="/dashboard">
                  <button className="btn btn-boss bg-blue-500 text-white rounded text-xl font-semibold">
                    Go to Dashboard
                  </button>
                </Link>
              </p>
            )
          ) : (
            <Link to="/login">
              {' '}
              <button className="btn btn-boss bg-blue-500 rounded text-white text-xl font-semibold">
                Get Started
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger / Close button (Mobile only) */}
        <div
          onClick={toggleMenu}
          className="hamburger block xl:hidden cursor-pointer bg-gray-100 px-2 py-1 rounded"
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-gray-700" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-gray-700" />
          )}
        </div>

        {/*
      The mobile dropdown menu is always present in the DOM,
      but we toggle classes to animate it in/out instead of removing it.
    */}
        <div
          className={`
        absolute top-full left-0 w-full z-50 bg-white shadow-md
        transform transition-all duration-500 ease-in-out origin-top
        ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
      `}
        >
          <div className="p-4 bg-base-300">
            {menu.map((menu, idx) => {
              if (menu === 'Features') {
                return (
                  <a className="py-2 text-lg block" key={idx} href="#features">
                    {menu}
                  </a>
                );
              } else if (menu === 'Extension') {
                return (
                  <a
                    className="text-lg py-2  block"
                    key={idx}
                    href="#extension"
                  >
                    {menu}
                  </a>
                );
              } else if (menu === 'AI Tools') {
                return (
                  <a className="text-lg py-2   block" key={idx} href="#aitools">
                    {menu}
                  </a>
                );
              } else if (menu === 'Home') {
                return (
                  <a className="text-lg py-2 block" key={idx} href="#">
                    {menu}
                  </a>
                );
              } else if (menu === 'About Us') {
                return (
                  <a className="text-lg py-2 block" key={idx} href="#about">
                    {menu}
                  </a>
                );
              } else {
                return null;
              }
            })}
            {/* Show dashboard or login button below menu */}

            <div className="mt-4 flex justify-center">
              {user ? (
                location.pathname.includes('/dashboard') ? (
                  <span className="font-semibold">{user.displayName}</span>
                ) : (
                  <Link to="/dashboard">
                    <button className="btn btn-boss bg-blue-500 text-white rounded text-lg font-semibold w-full">
                      Go to Dashboard
                    </button>
                  </Link>
                )
              ) : (
                <Link to="/login">
                  <button className="btn btn-boss bg-blue-500 rounded text-white text-xl font-semibold w-full">
                    Get Started
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

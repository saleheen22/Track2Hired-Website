import React, { useState } from 'react';
import { Link } from 'react-router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
 
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Jobs", path: "/dashboard/jobs" },
    { label: "Applications", path: "/dashboard/applications" },
    { label: "Settings", path: "/dashboard/settings" },
    { label: "Support", path: "/dashboard/support" },
  ];
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-5 left-4 z-50">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-gray-400" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-gray-400" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <nav 
        className={`fixed top-18 left-0 h-screen bg-gray-100 p-4 shadow-md z-40 
          transform transition-transform duration-300 w-96
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64`}
      >
        {/* Mobile Close Button */}
      
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)} // close on link click in mobile
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;



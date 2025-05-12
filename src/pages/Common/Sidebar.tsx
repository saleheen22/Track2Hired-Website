import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Jobs', path: '/dashboard/jobs' },
    { label: 'Cover Letters', path: '/dashboard/cover-letters' },
    { label: 'Company Research', path: '/dashboard/company-research' },
    { label: 'Mock Interviews', path: '/dashboard/mock-interviews' },
    { label: 'Cold Emails', path: '/dashboard/cold-email' },
    { label: 'Resume', path: '/dashboard/resume' },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  // Function to determine if a nav item is active
  const isActive = (path: string) => {
    if (path === '/dashboard') {
      // For dashboard, only highlight when exactly at /dashboard
      return currentPath === path;
    }
    // For other items, match if the current path starts with the item path
    return currentPath.startsWith(path);
  };
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
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:w-64`}
      >
        {/* Mobile Close Button */}

        <ul className="space-y-4">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-500 text-white font-medium'
                    : 'hover:bg-gray-200'
                }`}
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

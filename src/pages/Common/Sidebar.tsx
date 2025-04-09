import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Jobs", path: "/dashboard/jobs" },
    { label: "Applications", path: "/dashboard/applications" },
    { label: "Settings", path: "/dashboard/settings" },
    { label: "Support", path: "/dashboard/support" },
  ];

  return (
    <nav className="w-64 h-screen bg-gray-100 p-4 shadow-md fixed">
      <ul className="space-y-4 hidden md:block">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
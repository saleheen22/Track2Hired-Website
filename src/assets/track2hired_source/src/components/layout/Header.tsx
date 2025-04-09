import React, { useState } from 'react';
import { ScrollAnimation, HoverAnimation } from '../ui/Animations';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <ScrollAnimation 
            variant="fadeIn"
            duration={0.5}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="Track2Hired" 
              className="h-10 w-auto mr-2" 
            />
            <span className="text-xl font-bold text-primary-700">Track2Hired</span>
          </ScrollAnimation>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Extension', 'Dashboard', 'AI Tools', 'Pricing'].map((item) => (
              <HoverAnimation key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {item}
                </a>
              </HoverAnimation>
            ))}
          </nav>

          {/* CTA Button */}
          <HoverAnimation className="hidden md:block">
            <a href="#get-started" className="btn-primary">
              Get Started
            </a>
          </HoverAnimation>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-500 hover:text-primary-500 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ScrollAnimation
          variant="slideUp"
          duration={0.3}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Features', 'Extension', 'Dashboard', 'AI Tools', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#get-started"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </ScrollAnimation>
      )}
    </header>
  );
};

export default Header;

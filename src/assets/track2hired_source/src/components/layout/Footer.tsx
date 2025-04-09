import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <ScrollAnimation
            variant="fadeIn"
            duration={0.5}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Track2Hired" 
                className="h-8 w-auto mr-2 bg-white rounded p-1" 
              />
              <span className="text-xl font-bold text-white">Track2Hired</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Streamline your job search with our intelligent tracking and AI-powered tools.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <HoverAnimation key={social} scale={1.2}>
                  <a 
                    href={`#${social}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                      {/* Placeholder for social icons */}
                      <span className="text-xs">{social.charAt(0).toUpperCase()}</span>
                    </div>
                  </a>
                </HoverAnimation>
              ))}
            </div>
          </ScrollAnimation>
          
          {/* Quick Links */}
          <StaggerContainer className="space-y-2" staggerDelay={0.05}>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            {['Features', 'Extension', 'Dashboard', 'AI Tools', 'Pricing', 'Testimonials'].map((item) => (
              <StaggerItem key={item} variant="fadeIn">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* Resources */}
          <StaggerContainer className="space-y-2" staggerDelay={0.05} delay={0.1}>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            {['Blog', 'Guides', 'Help Center', 'API', 'Community', 'Partners'].map((item) => (
              <StaggerItem key={item} variant="fadeIn">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* Company */}
          <StaggerContainer className="space-y-2" staggerDelay={0.05} delay={0.2}>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <StaggerItem key={item} variant="fadeIn">
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        
        <ScrollAnimation
          variant="fadeIn"
          duration={0.5}
          delay={0.3}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Track2Hired. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;

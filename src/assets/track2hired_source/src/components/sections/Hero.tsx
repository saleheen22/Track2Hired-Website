import React from 'react';
import { ScrollAnimation, HoverAnimation } from '../ui/Animations';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text */}
          <ScrollAnimation 
            variant="slideRight"
            duration={0.8}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 mb-6">
              Track Your Job Applications <span className="text-primary-500">Effortlessly</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8">
              Never lose track of your job applications again. Track2Hired helps you organize your job search with our browser extension and AI-powered tools to increase your chances of getting hired.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <HoverAnimation>
                <a href="#get-extension" className="btn-primary text-center">
                  Get the Extension
                </a>
              </HoverAnimation>
              <HoverAnimation>
                <a href="#learn-more" className="btn-secondary text-center">
                  Learn More
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
          
          {/* Hero Image */}
          <ScrollAnimation 
            variant="slideLeft"
            duration={0.8}
            delay={0.2}
            className="md:w-1/2"
          >
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 bg-primary-100 rounded-full h-24 w-24 animate-pulse"
                style={{ 
                  animationDuration: '5s',
                  animationTimingFunction: 'ease-in-out'
                }}
              />
              <div
                className="absolute -bottom-8 -right-8 bg-primary-200 rounded-full h-32 w-32 animate-pulse"
                style={{ 
                  animationDuration: '6s',
                  animationTimingFunction: 'ease-in-out',
                  animationDelay: '0.5s'
                }}
              />
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border-4 border-white">
                <img 
                  src="/dashboard-preview.png" 
                  alt="Track2Hired Dashboard" 
                  className="w-full h-auto"
                  // Placeholder for actual dashboard image
                  style={{ 
                    background: 'linear-gradient(to right, #e6f1ff, #cce3ff)',
                    minHeight: '300px'
                  }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;

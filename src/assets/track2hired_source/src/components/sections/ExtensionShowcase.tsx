import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const ExtensionShowcase: React.FC = () => {
  return (
    <section id="extension" className="section bg-blue-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Extension Description */}
          <ScrollAnimation 
            variant="slideRight"
            duration={0.6}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Track Jobs with a Single Click</h2>
            <p className="text-lg text-secondary-600 mb-6">
              Our browser extension makes job tracking effortless. When browsing job listings, simply click the Track2Hired icon to automatically save all relevant information to your dashboard.
            </p>
            
            <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
              {[
                'Works on major job boards and company career pages',
                'Automatically extracts job title, company, location, and description',
                'Saves application deadlines and requirements',
                'Syncs instantly with your Track2Hired dashboard',
                'Reminds you of upcoming deadlines and follow-ups'
              ].map((feature, index) => (
                <StaggerItem key={index} variant="fadeIn" className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">{feature}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <HoverAnimation>
              <a 
                href="#download-extension" 
                className="btn-primary inline-flex items-center"
              >
                <span>Download Extension</span>
                <ArrowDownIcon className="ml-2 h-5 w-5" />
              </a>
            </HoverAnimation>
          </ScrollAnimation>
          
          {/* Extension Demo */}
          <ScrollAnimation 
            variant="slideLeft"
            duration={0.6}
            delay={0.2}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform rotate-3 rounded-xl"></div>
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                <div className="bg-gray-100 rounded-t-lg p-2 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500">Job Listing Page</div>
                </div>
                
                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Senior Frontend Developer</h3>
                    <p className="text-gray-600 mb-1">TechCorp Inc. • San Francisco, CA</p>
                    <p className="text-gray-500 text-sm">$120,000 - $150,000 • Remote • Full-time</p>
                  </div>
                  
                  <div className="mb-6 bg-gray-100 p-3 rounded">
                    <p className="text-sm text-gray-600">
                      We're looking for a Senior Frontend Developer with 5+ years of experience in React...
                    </p>
                  </div>
                  
                  <div 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 animate-pulse"
                    style={{ 
                      animationDuration: '2s',
                      animationTimingFunction: 'ease-in-out'
                    }}
                  >
                    <div className="bg-white p-2 rounded-full shadow-lg border-2 border-primary-500">
                      <img 
                        src="/logo.png" 
                        alt="Track2Hired Extension" 
                        className="h-12 w-12"
                        style={{ 
                          background: 'white',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <div className="absolute -top-10 right-0 bg-primary-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      Click to track this job!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExtensionShowcase;

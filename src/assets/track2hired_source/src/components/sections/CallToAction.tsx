import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CallToAction: React.FC = () => {
  return (
    <section id="get-started" className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation
            variant="slideUp"
            duration={0.6}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Streamline Your Job Search?</h2>
            <p className="text-lg text-white opacity-90 mb-8">
              Join thousands of job seekers who have simplified their job search process and increased their chances of landing their dream job with Track2Hired.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <HoverAnimation>
                <a 
                  href="#sign-up" 
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out inline-flex items-center justify-center"
                >
                  <span>Sign Up Free</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </HoverAnimation>
              <HoverAnimation>
                <a 
                  href="#download-extension" 
                  className="bg-primary-500 text-white border border-white hover:bg-primary-400 font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out inline-flex items-center justify-center"
                >
                  <span>Download Extension</span>
                </a>
              </HoverAnimation>
            </div>
            
            <p className="mt-6 text-sm text-white opacity-75">
              No credit card required. Free plan includes up to 10 job applications.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const JobTrackingFeature: React.FC = () => {
  return (
    <section id="job-tracking" className="section bg-white">
      <div className="container">
        <ScrollAnimation variant="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Jobs with One Click</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Never lose track of a job opportunity again. Our browser extension makes it effortless to save and organize your job applications.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation variant="slideRight" className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Works Everywhere</h3>
                <p className="text-secondary-600">
                  Our extension works on all major job boards including LinkedIn, Indeed, Glassdoor, and company career pages. No matter where you find jobs, Track2Hired has you covered.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Automatic Data Extraction</h3>
                <p className="text-secondary-600">
                  The extension automatically extracts job title, company name, location, salary (when available), and full job description. No more copy-pasting or manual data entry.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Smart Categorization</h3>
                <p className="text-secondary-600">
                  Jobs are automatically categorized by industry, role type, and required skills, making it easy to filter and find the perfect opportunities for your career goals.
                </p>
              </div>
              
              <HoverAnimation>
                <a href="#download-extension" className="btn-primary inline-flex items-center mt-4">
                  <span>Get the Extension</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideLeft" className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform rotate-2 rounded-xl"></div>
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                <div className="bg-gray-100 rounded-t-lg p-2 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500">LinkedIn Job Listing</div>
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
                  
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 animate-pulse">
                    <div className="bg-white p-2 rounded-full shadow-lg border-2 border-primary-500">
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -top-10 right-0 bg-primary-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      Click to track this job!
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Job Successfully Tracked!</h4>
                    <p className="text-sm text-gray-500">Added to your Track2Hired dashboard</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm text-primary-700">
                  View all your tracked jobs in your personalized dashboard
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default JobTrackingFeature;

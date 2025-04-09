import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { ChartBarIcon, ClockIcon, BellIcon, TagIcon, FunnelIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const DashboardFeature: React.FC = () => {
  return (
    <section id="dashboard-feature" className="section bg-blue-50">
      <div className="container">
        <ScrollAnimation variant="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Job Search Command Center</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Track2Hired's dashboard gives you a complete overview of your job search progress with powerful tools to manage every aspect of your applications.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation variant="slideRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform -rotate-1 rounded-xl"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-primary-700 text-white p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src="/logo.png" 
                        alt="Track2Hired" 
                        className="h-8 w-auto mr-2 bg-white rounded" 
                      />
                      <h3 className="text-xl font-bold">Track2Hired Dashboard</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <BellIcon className="h-5 w-5" />
                      </div>
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">JS</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <ChartBarIcon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h4 className="font-semibold text-primary-700">Applications</h4>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">24</p>
                      <p className="text-sm text-primary-500">+3 this week</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <ClockIcon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h4 className="font-semibold text-primary-700">Interviews</h4>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">5</p>
                      <p className="text-sm text-primary-500">2 upcoming</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <TagIcon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h4 className="font-semibold text-primary-700">Offers</h4>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">1</p>
                      <p className="text-sm text-primary-500">Pending response</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 mb-6">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                      <h4 className="font-semibold">Recent Applications</h4>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-500 hover:text-primary-500">
                          <FunnelIcon className="h-5 w-5" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-primary-500">
                          <ArrowPathIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {[
                        { role: 'Senior Frontend Developer', company: 'TechCorp Inc.', date: '2 days ago', status: 'Applied' },
                        { role: 'UX Designer', company: 'Design Studio', date: '5 days ago', status: 'Interview' },
                        { role: 'Product Manager', company: 'StartupXYZ', date: '1 week ago', status: 'Assessment' },
                        { role: 'Full Stack Engineer', company: 'Enterprise Solutions', date: '2 weeks ago', status: 'Offer' }
                      ].map((job, index) => (
                        <div key={index} className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium text-primary-700">{job.role}</p>
                            <p className="text-sm text-gray-500">{job.company} • {job.date}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                            job.status === 'Interview' ? 'bg-purple-100 text-purple-800' :
                            job.status === 'Assessment' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {job.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideLeft">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Visual Application Tracking</h3>
                    <p className="text-secondary-600">
                      Track your applications through every stage of the hiring process with our intuitive kanban board. Drag and drop applications between stages as you progress.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Automated Reminders</h3>
                    <p className="text-secondary-600">
                      Never miss a follow-up or deadline again. Set reminders for interviews, application deadlines, and follow-up emails to stay on top of your job search.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Insightful Analytics</h3>
                    <p className="text-secondary-600">
                      Gain valuable insights into your job search with detailed analytics. Track response rates, interview conversions, and identify which job sources yield the best results.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Interview Calendar</h3>
                    <p className="text-secondary-600">
                      Manage all your interviews in one place with our integrated calendar. Receive notifications, prepare with AI-generated questions, and track outcomes.
                    </p>
                  </div>
                </div>
              </div>
              
              <HoverAnimation>
                <a href="#try-dashboard" className="btn-primary inline-block mt-4">
                  Explore the Dashboard
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeature;

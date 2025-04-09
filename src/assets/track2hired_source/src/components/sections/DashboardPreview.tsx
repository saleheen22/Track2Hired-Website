import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { ChartBarIcon, ClockIcon, BellIcon, TagIcon } from '@heroicons/react/24/outline';

const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="section bg-white">
      <div className="container">
        <ScrollAnimation
          variant="slideUp"
          duration={0.6}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Job Search Command Center</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Track2Hired's dashboard gives you a complete overview of your job search progress, helping you stay organized and focused.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          variant="scaleUp"
          duration={0.8}
          className="relative"
        >
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
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" staggerDelay={0.15}>
                <StaggerItem variant="slideUp" className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <ChartBarIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">Applications</h4>
                  </div>
                  <p className="text-3xl font-bold text-primary-600">24</p>
                  <p className="text-sm text-primary-500">+3 this week</p>
                </StaggerItem>
                
                <StaggerItem variant="slideUp" className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <ClockIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">Interviews</h4>
                  </div>
                  <p className="text-3xl font-bold text-primary-600">5</p>
                  <p className="text-sm text-primary-500">2 upcoming</p>
                </StaggerItem>
                
                <StaggerItem variant="slideUp" className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <TagIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">Offers</h4>
                  </div>
                  <p className="text-3xl font-bold text-primary-600">1</p>
                  <p className="text-sm text-primary-500">Pending response</p>
                </StaggerItem>
              </StaggerContainer>
              
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold">Recent Applications</h4>
                </div>
                <StaggerContainer className="divide-y divide-gray-100" staggerDelay={0.1}>
                  {[
                    { role: 'Senior Frontend Developer', company: 'TechCorp Inc.', date: '2 days ago', status: 'Applied' },
                    { role: 'UX Designer', company: 'Design Studio', date: '5 days ago', status: 'Interview' },
                    { role: 'Product Manager', company: 'StartupXYZ', date: '1 week ago', status: 'Assessment' },
                    { role: 'Full Stack Engineer', company: 'Enterprise Solutions', date: '2 weeks ago', status: 'Offer' }
                  ].map((job, index) => (
                    <StaggerItem key={index} variant="fadeIn" className="p-4 flex justify-between items-center">
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
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              
              <div className="text-center">
                <HoverAnimation>
                  <a href="#view-dashboard" className="btn-primary inline-block">
                    View Full Dashboard
                  </a>
                </HoverAnimation>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DashboardPreview;

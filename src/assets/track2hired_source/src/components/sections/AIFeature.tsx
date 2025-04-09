import React from 'react';
import { ScrollAnimation, StaggerContainer, StaggerItem, HoverAnimation } from '../ui/Animations';
import { DocumentTextIcon, ChatBubbleLeftRightIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const AIFeature: React.FC = () => {
  return (
    <section id="ai-feature" className="section bg-white">
      <div className="container">
        <ScrollAnimation variant="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Job Application Tools</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Stand out from the competition with our suite of AI tools designed to personalize your applications and prepare you for interviews.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollAnimation variant="slideRight">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">AI Cover Letter Generator</h3>
              <p className="text-lg text-secondary-600 mb-6">
                Our advanced AI analyzes both the job description and your skills to create personalized cover letters that highlight your most relevant experience and qualifications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Tailored to specific job requirements and company culture</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Highlights your most relevant skills and achievements</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Professionally written with perfect grammar and tone</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Editable to add your personal touch</p>
                </div>
              </div>
              
              <HoverAnimation>
                <a href="#try-ai-cover-letter" className="btn-primary inline-block mt-4">
                  Generate Your Cover Letter
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform rotate-2 rounded-xl"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">AI-Generated Cover Letter</h4>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Generated</span>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-4">
                  <p className="text-gray-700 font-medium mb-3">Dear Hiring Manager,</p>
                  <p className="text-gray-600 mb-3">
                    I am writing to express my interest in the Senior Frontend Developer position at TechCorp Inc. With over 5 years of experience in React development and a passion for creating intuitive user interfaces, I believe I would be a valuable addition to your team.
                  </p>
                  <p className="text-gray-600 mb-3">
                    In my current role at InnovateTech, I led the development of a customer-facing dashboard that improved user engagement by 35%. I implemented performance optimizations that reduced load times by 40% and established best practices for component architecture that were adopted across the organization.
                  </p>
                  <p className="text-gray-600 mb-3">
                    Your job description mentions the need for expertise in responsive design and state management, areas where I have demonstrated success. I recently completed a project using Redux Toolkit and React Query to manage complex application state, resulting in more maintainable code and improved developer experience.
                  </p>
                  <p className="text-gray-600 mb-3">
                    I am particularly excited about TechCorp's mission to revolutionize the fintech industry through innovative user experiences. My background in financial applications and commitment to accessibility standards would allow me to contribute immediately to your team's goals.
                  </p>
                  <p className="text-gray-600 mb-3">
                    I look forward to the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application.
                  </p>
                  <p className="text-gray-700 font-medium">Sincerely,<br/>John Smith</p>
                </div>
                
                <div className="flex justify-between">
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Edit Cover Letter
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Download as PDF
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollAnimation variant="slideRight" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform -rotate-2 rounded-xl"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">Mock Interview Questions</h4>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Generated</span>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium text-primary-700 mb-2">Technical Questions</p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"Describe your experience with React hooks and how they've improved your component architecture."</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"How do you approach state management in large-scale React applications?"</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"Explain how you would optimize the performance of a React application."</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium text-primary-700 mb-2">Behavioral Questions</p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"Tell me about a time when you had to refactor a complex codebase. What was your approach?"</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"Describe a situation where you had to collaborate with designers to implement a challenging UI feature."</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <p>"How do you stay updated with the latest frontend development trends and best practices?"</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Generate More Questions
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Practice with AI
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideLeft" className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">AI Mock Interview Preparation</h3>
              <p className="text-lg text-secondary-600 mb-6">
                Practice with job-specific interview questions generated by our AI based on the position you're applying for. Get ready to impress in your next interview.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Role-specific technical and behavioral questions</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Company-specific questions based on their values and culture</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Interactive practice mode with AI feedback</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Suggested answer frameworks for common questions</p>
                </div>
              </div>
              
              <HoverAnimation>
                <a href="#try-mock-interview" className="btn-primary inline-block mt-4">
                  Practice Interview Questions
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation variant="slideRight">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">AI Resume Tailoring</h3>
              <p className="text-lg text-secondary-600 mb-6">
                Our AI analyzes job descriptions and suggests modifications to your resume to highlight the most relevant skills and experience, increasing your chances of getting past ATS systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Keyword optimization for ATS compatibility</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Skill prioritization based on job requirements</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Achievement highlighting with quantifiable metrics</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">Professional formatting suggestions</p>
                </div>
              </div>
              
              <HoverAnimation>
                <a href="#try-resume-tailoring" className="btn-primary inline-block mt-4">
                  Tailor Your Resume
                </a>
              </HoverAnimation>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 transform rotate-2 rounded-xl"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <DocumentDuplicateIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-primary-700">Resume Optimization</h4>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Suggestions</span>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <p className="font-medium text-primary-700 mb-3">Job Description Keywords</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Redux</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Responsive Design</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Performance Optimization</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Jest</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">CI/CD</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-yellow-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-yellow-700">
                        <span className="font-medium">Suggestion:</span> Move your React project experience to the top of your work history
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-yellow-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-yellow-700">
                        <span className="font-medium">Suggestion:</span> Add more details about your experience with responsive design and TypeScript
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-yellow-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-yellow-700">
                        <span className="font-medium">Suggestion:</span> Include metrics about performance improvements you achieved in previous roles
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Apply Suggestions
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Download Optimized Resume
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;

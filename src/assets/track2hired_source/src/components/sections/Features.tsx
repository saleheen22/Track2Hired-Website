import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../ui/Animations';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Job Tracking Extension',
      description: 'Save job listings with a single click while browsing. Our browser extension automatically captures job details and saves them to your dashboard.',
      icon: '📌'
    },
    {
      title: 'Centralized Dashboard',
      description: 'View all your job applications in one place. Track status, deadlines, and follow-ups with our intuitive dashboard.',
      icon: '📊'
    },
    {
      title: 'AI Cover Letter Generator',
      description: 'Create tailored cover letters in seconds. Our AI analyzes the job description and your skills to generate personalized cover letters.',
      icon: '✉️'
    },
    {
      title: 'Mock Interview Questions',
      description: 'Practice with job-specific interview questions. Get prepared with AI-generated questions based on the position you are applying for.',
      icon: '💬'
    },
    {
      title: 'Resume Tailoring',
      description: 'Optimize your resume for each application. Our AI suggests modifications to highlight relevant skills and experience.',
      icon: '📝'
    },
    {
      title: 'Application Analytics',
      description: 'Gain insights into your job search. Track response rates, interview conversions, and identify successful strategies.',
      icon: '📈'
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <ScrollAnimation variant="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Streamline Your Job Search</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Track2Hired combines intelligent tracking with AI-powered tools to help you land your dream job faster.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index} variant="slideUp" className="card group">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary-600 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import 'animate.css';

const StreamLine = () => {
    const cardData = [
   
        {
          title: "Job Tracking Extension",
          description: "Save job listings with a single click while browsing. Our browser extension automatically captures job details and saves them to your dashboard.",
          icon: "📌"
        },
        {
          title: "AI Cover Letters",
          description: "Generate tailored cover letters using Gemini AI.",
          icon: "🤖"
        },
        {
          title: "Track Applications",
          description: "View all your job applications in a single dashboard.",
          icon: "📊"
        },
      
      ];
    return (
       <div id="features" className="max-w-7xl mx-auto pt-10 md:pt-20">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-blue-900 mb-6 mx-auto">Powerful Features to Streamline Your Job Search
        </h1>
        <p>Track2Hired combines intelligent tracking with AI-powered tools to help you land your dream job faster.</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 flex flex-col  animate__animated animate__lightSpeedInLeft border-b-2 shadow-2xl">
            <div className="text-4xl text-left mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-justify">{card.description}</p>
          </div>
        ))}
      </div>
       </div>
    );
};

export default StreamLine;
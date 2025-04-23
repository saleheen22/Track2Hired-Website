import React from 'react';

const StreamLine = () => {
    const cardData = [
        {
          title: "Save Jobs Instantly",
          description: "Use our extension to save jobs from any site with one click.",
          icon: "💾"
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
        // ...add more cards as needed
      ];
    return (
       <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-blue-900 mb-6 mx-auto">Powerful Features to Streamline Your Job Search
        </h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 x">
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
       </div>
    );
};

export default StreamLine;
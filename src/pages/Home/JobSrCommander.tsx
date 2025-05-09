import React, { useEffect, useState } from "react";

const features = [
  "Track all your job applications in one place",
  "AI-powered cover letters and cold emails",
  "One-click job saving with browser extension",
  "Dashboard analytics for your job search",
  "Company research and interview prep tools"
];

const JobSrCommander = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible < features.length) {
      const timer = setTimeout(() => setVisible(visible + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [visible]);
  
  return (
    <div className="bg-blue-100 mt-5  mx-auto">
         <div className="max-w-7xl mx-auto">
           <div className=" pt-10 md:pt-20 ">
        <h1 className="text-2xl md:text-4xl text-center xl:text-5xl font-bold text-blue-900 mb-6 mx-auto">
          Your Job Search Command Center
        </h1>
        <p className="mx-8 md:mx-auto text-center text-xl md:text-2xl max-w-3xl py-4 xl:py-8 xl:mt-6">
          Track2Hired's dashboard gives you a complete overview of your job
          search progress with powerful tools to manage every aspect of your
          applications.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
    
      <ul className="list-none p-0 mt-6">
      {features.map((item, idx) => (
        <li
          key={item}
          className="flex items-center mb-3 transition-opacity"
          style={{
            opacity: idx < visible ? 1 : 0.3,
            transition: "opacity 0.3s"
          }}
        >
          <span className="text-blue-500 mr-2">✔️</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
      </div>
      <div>
        <p>right</p>
      </div>
         </div>
    </div>
  );
};

export default JobSrCommander;

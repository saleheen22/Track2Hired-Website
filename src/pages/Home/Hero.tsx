
import { Typewriter } from 'react-simple-typewriter';
import {Link} from 'react-router';
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100">
      <div className=" py-20 md:py-32 h-[55vh] flex items-center justify-center max-w-7xl mx-auto">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-6  ">
            Supercharge Your Job Search With
            <span className="text-blue-500 block">
              <Typewriter
                words={[
                  'Our One-Click Browser Extension.',
                  'Effortless Job Tracking.',
                  'Personalized Cover Letters.',
                  'Personalized Cold Emails.',
                  'Company Research Powered by AI.',
                  'Smart Interview Scheduling.',
                  'All in One Platform.',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-slate-600 mb-8 ">
            Never lose track of your job applications again. Track2Hired helps
            you organize your job search with our browser extension and
            AI-powered tools to increase your chances of getting hired
          </p>

          <div className=" flex  justify-center gap-10    ">
            <button className="btn bg-blue-500  text-white  xl:text-xl text-center sm:p-6 md:text-lg rounded-xl w-1/3 md:w-auto">
              Get The Extension
            </button>
            <button className="btn bg-white text-center border-2 border-blue-500 text-blue-500 sm:p-6 md:text-lg xl:text-xl rounded-xl w-1/3 md:w-auto">
              <Link to='/about'>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

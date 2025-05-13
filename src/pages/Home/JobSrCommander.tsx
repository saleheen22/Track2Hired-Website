import { motion } from 'framer-motion';
import 'animate.css';
import img1 from '../../assets/web/genrate-cover-Letter.png';
import img2 from '../../assets/web/jobsList.png';
const features = [
  'Track all your job applications in one place',
  'AI-powered cover letters and cold emails',
  'One-click job saving with browser extension',
  'Dashboard analytics for your job search',
  'Company research and interview prep tools',
];

const JobSrCommander = () => {
  // Container variants for staggered children animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Time between each child animation
        delayChildren: 0.3, // Initial delay before starting
      },
    },
  };

  // Animation for each list item
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  // Animation for the checkmark
  const checkmark = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-blue-100 mt-5 mx-auto pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="pt-10 md:pt-20">
          <h1 className="text-2xl md:text-4xl text-center xl:text-5xl font-bold text-blue-900 mb-6 mx-auto">
            Your Job Search Command Center
          </h1>
          <p className="mx-8 md:mx-auto text-center text-xl md:text-2xl max-w-3xl py-4 xl:py-8 xl:my-3">
            Track2Hired's dashboard gives you a complete overview of your job
            search progress with powerful tools to manage every aspect of your
            applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-4 md:gap-12 ml-5 lg:ml-0 text-gray-700">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 md:mb-0 w-full md:w-6/12 "
          >
            <ul className="list-none p-0 mt-0 md:text-lg lg:text-xl xl:text-2xl font-bold">
              {features.map(feature => (
                <motion.li
                  key={feature}
                  variants={item}
                  className="flex items-center mb-4"
                >
                  <motion.span
                    className="text-blue-500 mr-2 flex items-center justify-center w-5 h-5"
                    variants={checkmark}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="40"
                      height="40"
                      className="min-w-5 min-h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="animate__animated animate__fadeInRightBig w-full md:w-6/12 items-center ml-10 md:ml-0">
            <motion.img
              src={img1}
              alt="cover letter generator"
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-64 md:w-96  xl:w-[500px] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-t-lg border-l-4 border-b-4 border-blue-900 rounded-br-2xl shadow-2xl"
            />
            <motion.img
              src={img2}
              alt="cover letter generator"
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              className="w-64 md:w-96 xl:w-[500px] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-t-lg border-l-4 border-b-4 border-blue-900 rounded-br-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSrCommander;

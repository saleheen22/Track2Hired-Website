import {Link} from 'react-router';
const GetTheExtension = () => {
  return (
    <div className="bg-blue-700 text-white">
      <div className="max-w-7xl   mx-auto pt-10 md:pt-20">
        <h1 className="text-2xl md:text-4xl text-center xl:text-5xl font-bold  mb-6 mx-auto">
          Ready to Streamline Your Job Search?
        </h1>
        <p className="mx-8 md:mx-auto text-center text-xl md:text-2xl max-w-3xl py-4 xl:py-8 xl:my-6">
          Join thousands of job seekers who have simplified their job search
          process and increased their chances of landing their dream job with
          Track2Hired.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 pb-6 md:pb-8">
          <button className="btn bg-white font-bold text-blue-800  md:text-lg">
            <Link to='/register'>Sign Up Free</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="ml-2 h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
          <button className="btn bg-blue-800 text-white font-bold md:text-lg p-4">
            Download Extension
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default GetTheExtension;

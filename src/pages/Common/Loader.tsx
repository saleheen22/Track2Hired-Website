import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading jobs...' }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <div className="absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(100%-8px)]">
          <div
            className="w-full h-full rounded-full border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent animate-spin"
            style={{ animationDuration: '0.85s' }}
          ></div>
        </div>
        <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)]">
          <div
            className="w-full h-full rounded-full border-4 border-t-transparent border-r-transparent border-b-primary border-l-transparent animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loader;

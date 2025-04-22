import React from 'react';

const Hero = () => {
    return (
        <div className= "bg-gradient-to-b from-white to-blue-100 py-20 md:py-32">

           <div className="container mx-auto px-4 text-center flex ">
           <div className="left" > <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6  ">
            Track Your Job Applications
            <span className="text-blue-500 block ">Effortlessly</span>
            </h1>
            </div>
           <div className="right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius amet nam enim facere, harum architecto incidunt ipsa magnam quidem?</p>
           </div>
            </div>
        </div>
    );
};

export default Hero;
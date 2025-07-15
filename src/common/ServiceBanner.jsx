import React from "react";
import Button2 from "./Button2";

const ServiceBanner = ({heading, description, image}) => {
  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
    <div className="w-full lg:w-[65%] text-white flex flex-col items-center lg:items-start pt-20 pb-10">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 text-center lg:text-left"
        data-aos="fade-down"
      >
        {heading}
      </h1>
      <p
        className="text-sm mb-8 text-center lg:text-left"
        data-aos="fade-left"
      >
        {description}
      </p>
      <Button2 text="Know Your App Cost" />
    </div>
    <div className='w-full lg:w-[35%] flex justify-center lg:justify-end' data-aos="fade-right">
    <img 
      className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-full max-w-md lg:max-w-none' 
      src={image} 
      alt="Mobile consulting"
    />
  </div>
  </div>
  );
};

export default ServiceBanner;

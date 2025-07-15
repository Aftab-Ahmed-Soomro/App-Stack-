import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Company = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-white mt-10 sm:mt-14 md:mt-16 lg:mt-20 border border-gray-50 py-6 sm:py-8 md:py-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 rounded-3xl sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] shadowClass'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12' data-aos="fade-left" data-aos-delay="100">
        Top Rated
        <span className='font-semibold'> Development Company</span>
      </h1>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-20'>
        <div className='flex items-center justify-center' data-aos="fade-down" data-aos-delay="100">
          <img 
            src="/imgs/bl1.webp" 
            alt="company-1" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className='flex items-center justify-center' data-aos="fade-up" data-aos-delay="200">
          <img 
            src="/imgs/bl2.webp" 
            alt="company-2" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className='flex items-center justify-center' data-aos="fade-down" data-aos-delay="300">
          <img 
            src="/imgs/bl3.webp" 
            alt="company-3" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className='flex items-center justify-center' data-aos="fade-up" data-aos-delay="400">
          <img 
            src="/imgs/bl4.webp" 
            alt="company-4" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className='flex items-center justify-center' data-aos="fade-down" data-aos-delay="500">
          <img 
            src="/imgs/bl5.webp" 
            alt="company-5" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className='flex items-center justify-center' data-aos="fade-up" data-aos-delay="600">
          <img 
            src="/imgs/bl6.webp" 
            alt="company-6" 
            className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Company

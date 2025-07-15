import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 relative" data-aos="fade-up" data-aos-delay="100">
      <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-10 sm:mt-14 md:mt-16 lg:mt-20'>
        Tech Stack For React Native App
        <span className='text-[#0071A0] block sm:inline mt-2 sm:mt-0'> Development</span>
      </h1>
      <p className='text-xs sm:text-sm leading-6 mt-4 sm:mt-6 text-gray-500 mb-8 sm:mb-10 md:mb-12 text-center max-w-4xl mx-auto'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-0'>
        {/* Left Side */}
        <div className='bg-[#232323] w-full lg:w-[20%] flex flex-row lg:flex-col justify-center items-center text-white py-6 lg:pt-20 lg:pb-34 gap-4 sm:gap-6 lg:gap-8 font-semibold rounded-t-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl'>
          <p className='text-sm sm:text-base hover:text-[#0071A0] cursor-pointer transition-all duration-300' data-aos="fade-left" data-aos-delay="200">Design</p>
          <p className='text-sm sm:text-base hover:text-[#0071A0] cursor-pointer transition-all duration-300' data-aos="fade-left" data-aos-delay="300">Frontend</p>
          <p className='text-sm sm:text-base hover:text-[#0071A0] cursor-pointer transition-all duration-300' data-aos="fade-left" data-aos-delay="400">Backend</p>
        </div>

        {/* Right Side */}
        <div className='w-full lg:w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-down" data-aos-delay="500">
            <img src="/imgs/Sketch.png" alt="Sketch logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Sketch</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-down" data-aos-delay="600">
            <img src="/imgs/adobe-photoshop.png" alt="Photoshop logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Photoshop</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-down" data-aos-delay="700">
            <img src="/imgs/adobe-xd.png" alt="Adobe XD logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Adobe XD</p>
          </div>
          <div className='hidden lg:flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200 lg:rounded-tr-3xl'>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-up" data-aos-delay="800">
            <img src="/imgs/adobe-illustrator.png" alt="Illustrator logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Illustrator</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-up" data-aos-delay="900">
            <img src="/imgs/marvel.png" alt="Marvel logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Marvel</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200' data-aos="fade-up" data-aos-delay="1000">
            <img src="/imgs/Indesign.png" alt="Indesign logo" className="w-12 sm:w-16 md:w-20" />
            <p className='font-semibold text-sm sm:text-base'>Indesign</p>
          </div>
          <div className='hidden lg:flex flex-col justify-center items-center gap-1 p-4 sm:p-6 md:p-8 lg:px-14 lg:py-[42.65px] border border-gray-200 lg:rounded-br-3xl'>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex justify-center items-center absolute top-50 right-24'>
        <img src="/imgs/native-tab.webp" alt="native-tab" className='object-cover w-[500px] h-[450px]' />
      </div>
    </div>
  )
}

export default TechStack

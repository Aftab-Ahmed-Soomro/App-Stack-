import React from 'react'
import Button2 from '../common/Button2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hire = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-[#2B2B2B] mt-12 sm:mt-16 md:mt-20 lg:mt-24 pb-8 sm:pb-12 md:pb-14 lg:pb-16 pt-10 sm:pt-14 md:pt-16 lg:pt-20">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16" data-aos="fade-down" data-aos-delay="100">
          <h1 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center'>
            Need Top Talent? Hire Our Developers by the Hour –
            <span className='text-[#0071A0] block sm:inline mt-2 sm:mt-0'> No Strings Attached</span>
          </h1>
          <p className='text-xs sm:text-sm text-center text-white px-4 sm:px-8 md:px-12 lg:px-16 mt-3 sm:mt-4 mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto'>
            Why hire average when you can get the best on demand? Our elite developers are ready to jump into your project, bring your ideas to life, and deliver exceptional results—whenever you need them, by the hour.
          </p>
        </div>

        <div className='px-4 sm:px-6 md:px-10 lg:px-20'>
          <div className='flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-0'>
            {/* Left Side */}
            <div className='bg-[#343434] flex flex-col justify-center items-center w-full lg:w-[33%] text-white gap-2 py-6 sm:py-8 lg:py-10 border border-[#ccc] rounded-t-3xl lg:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl' data-aos="fade-left" data-aos-delay="200">
              <h1 className='font-semibold text-xl sm:text-2xl'>Mid-Level Developers</h1>
              <p className='text-sm sm:text-base'>3-6 Years of Experience</p>
              <p className='text-sm sm:text-base'>70+ Developers</p>
            </div>

            {/* Mid Side */}
            <div className='w-full lg:w-[34%] bg-white py-6 sm:py-8 rounded-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-br-3xl order-second lg:order-none' data-aos="fade-up" data-aos-delay="300">
              <style>
                {`
                  @keyframes dance {
                    0% { transform: translateY(0) rotate(-5deg) scale(1); }
                    10% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
                    20% { transform: translateY(0) rotate(-5deg) scale(1); }
                    30% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
                    40% { transform: translateY(0) rotate(-5deg) scale(1); }
                    50% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
                    60% { transform: translateY(0) rotate(-5deg) scale(1); }
                    70% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
                    80% { transform: translateY(0) rotate(-5deg) scale(1); }
                    90% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
                    100% { transform: translateY(0) rotate(-5deg) scale(1); }
                  }
                  .dance-animation {
                    animation: dance 3s infinite;
                    display: inline-block;
                  }
                `}
              </style>
              <div className='flex justify-center items-center'>
                <img
                  className='h-40 sm:h-48 md:h-56 lg:h-64 w-auto object-contain dance-animation'
                  src="/imgs/mobile.png"
                  alt="Mobile development illustration"
                />
              </div>
              <div className='flex flex-col justify-center items-center gap-2 mt-4'>
                <h1 className='font-semibold text-xl sm:text-2xl'>Mid-Level Developers</h1>
                <p className='text-sm sm:text-base'>3-6 Years of Experience</p>
                <p className='text-sm sm:text-base'>70+ Developers</p>
              </div>
            </div>

            {/* Right Side */}
            <div className='bg-[#0071A0] flex flex-col justify-center items-center w-full lg:w-[33%] text-white py-6 sm:py-8 lg:py-10 rounded-b-3xl lg:rounded-none lg:rounded-br-3xl lg:rounded-tr-3xl' data-aos="fade-right" data-aos-delay="400">
              <h1 className='font-semibold text-xl sm:text-2xl'>Get a Fixed Hourly Rate</h1>
              <p className='text-lg sm:text-xl mt-2'>Starting from</p>
              <p className='text-4xl sm:text-5xl font-semibold'>$20</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-8 sm:mt-10 md:mt-12' data-aos="fade-up" data-aos-delay="500">
          <Button2 text={"Get More Info"} />
        </div>
    </div>
  )
}

export default Hire

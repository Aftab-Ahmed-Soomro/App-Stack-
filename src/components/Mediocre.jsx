import React from 'react'
import MediocreCard from '../common/MediocreCard'
import Button1 from '../common/Button1'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Mediocre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-20'>
      <div className="max-w-4xl mx-auto" data-aos="fade-down" data-aos-delay="100">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center'>
          Why Settle for Mediocre
          <span className='text-[#0071A0] block sm:inline mt-2 sm:mt-0'> When You Can Have the Best?</span>
        </h1>
        <p className='text-xs sm:text-sm leading-6 mt-4 sm:mt-6 text-gray-500 mb-8 sm:mb-10 md:mb-12 text-center'>
          We're not just another dev shop—we're the team that delivers results that others can't. From cutting-edge tech to award-winning designs, we take your project from concept to market domination. When you work with us, you're working with the top 1%
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
        <div data-aos="fade-down" data-aos-delay="200">
          <MediocreCard heading="12+" paragraph="Years of Expertise" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <MediocreCard heading="400+" paragraph="Software Developers" />
        </div>
        <div data-aos="fade-down" data-aos-delay="400">
          <MediocreCard heading="300+" paragraph="Successful Projects" />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <MediocreCard heading="90+" paragraph="Satisfied Customers" />
        </div>
      </div>

      <div className='flex justify-center mt-8 sm:mt-10 md:mt-12' data-aos="fade-up" data-aos-delay="600">
        <Button1 text="Get Your App Started" />
      </div>
    </div>
  )
}

export default Mediocre

import React from 'react'
import DomainCard from '../common/DomainCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Domain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-20'>
      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center'>
          Perfection in Every Step – Our Process is as Flawless as Our Code
        </h1>
        <p className='text-xs sm:text-sm leading-6 mt-4 sm:mt-6 mb-8 sm:mb-10 md:mb-12 text-center text-gray-500'>
          From ideation to launch, we've refined the app development process down to an art. Strategy, design, development, and beyond—each phase is crafted with precision to deliver nothing short of perfection. Why settle for shortcuts when you can get it done right?.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
        <div data-aos="fade-left" data-aos-delay="200">
        <DomainCard 
          heading="On-boarding" 
          paragraph="We kick things off by understanding your vision and goals to set the foundation for success."
          icon="fa-solid fa-rocket"
        />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
        <DomainCard 
          heading="Designing" 
          paragraph="Our creative team crafts sleek, intuitive designs that not only look great but offer a seamless user experience."
          icon="fa-solid fa-pen-ruler"
        />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
        <DomainCard 
          heading="Development" 
          paragraph="Turning ideas into reality, our developers build robust, high-performance apps tailored to your needs."
          icon="fa-solid fa-code"
        />
        </div>
        <div data-aos="fade-right" data-aos-delay="500">
        <DomainCard 
          heading="QA & Launch" 
          paragraph="We rigorously test your app for quality and performance, ensuring a flawless launch into the market."
          icon="fa-solid fa-paper-plane"
        />
        </div>
      </div>
    </div>
  )
}

export default Domain

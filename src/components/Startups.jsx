import React from 'react'
import StartupCard from '../common/StartupCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Startups = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-[#252525] py-10 sm:py-14 md:py-16 lg:py-20 mt-10 sm:mt-14 md:mt-16 lg:mt-20'>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div data-aos="fade-down" data-aos-delay="100">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white'>
          From Startups to Giants – We've Done It All
        </h1>
        <p className='text-xs sm:text-sm leading-6 mt-4 sm:mt-6 mb-8 sm:mb-10 md:mb-12 text-center text-white max-w-4xl mx-auto'>
          Tech, healthcare, e-commerce, gaming—you name it, we've mastered it. With experience across industries, we don't just understand your business; we know how to take it to the next level. Whatever the challenge, we've already conquered it.
        </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6' data-aos="fade-up" data-aos-delay="200">
          <StartupCard text="E-commerce" icon="fa-solid fa-cart-shopping" />
          <StartupCard text="Game" icon="fa-solid fa-gamepad" />
          <StartupCard text="On-Demand" icon="fa-solid fa-clock" />
          <StartupCard text="Finance" icon="fa-solid fa-money-bill-wave" />
          <StartupCard text="Healthcare" icon="fa-solid fa-hospital" />
          <StartupCard text="Restaurant" icon="fa-solid fa-utensils" />
          <StartupCard text="Real Estate" icon="fa-solid fa-building" />
          <StartupCard text="Tour & Travels" icon="fa-solid fa-plane" />
          <StartupCard text="Education" icon="fa-solid fa-graduation-cap" />
          <StartupCard text="Transport" icon="fa-solid fa-truck" />
          <StartupCard text="Event" icon="fa-solid fa-calendar" />
          <StartupCard text="Grocery" icon="fa-solid fa-shopping-basket" />
        </div>
      </div>
    </div>
  )
}

export default Startups

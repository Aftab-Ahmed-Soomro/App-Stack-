import React from 'react'
import AchievementCard from '../common/AchievementCard'
import Button1 from '../common/Button1'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FormSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-[#F5F9FB] px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-14 flex flex-col lg:flex-row justify-between items-center'>
      {/* Left Side */}
      <div className='w-full lg:w-[60%] mb-8 lg:mb-0 order-1 lg:order-none flex flex-col'>
        <div data-aos="fade-left" data-aos-delay="100">
          <h1 className='text-[#0071A0] text-base md:text-lg'>#1 US App Development Company</h1>
          <h1 className='text-2xl sm:text-3xl md:text-[40px] font-semibold'>
            Bring Your <span className='text-[#0071A0]'> App Idea to Life </span> with an
          </h1>
          <h1 className='text-2xl sm:text-3xl md:text-[40px] font-semibold'>Award-winning Development Team</h1>
          <p className='text-sm md:text-base leading-6 mt-2 md:mt-4'>
            Build powerful, user-focused iOS and Android apps with Limegreensapps. We deliver high-performance apps that drive growth, boost engagement, and maximize ROI. Perfect for businesses of any size, our solutions are tailored to meet your unique goals and deliver real results.
          </p>
        </div>
        <h1 className='text-lg md:text-xl font-semibold mt-4 mb-4'>Get 2X Faster Delivery and Save up to 40% on Costs</h1>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-4 w-full">
            <AchievementCard image="/imgs/icon1.png" text="Project kickoff with just 10% Payment" />
            <AchievementCard image="/imgs/icon2.png" text="100% Money-back Guarantee" />
            <AchievementCard image="/imgs/icon3.png" text="150+ Certified Developers" />
          </div>
        <div className='mt-6 md:mt-8'>
          <Button1 text="Get a Free Quote in less than 12 hrs"/>
        </div>
        <p className='text-xs sm:text-sm leading-6 mt-6 md:mt-10 text-gray-500 max-w-xl'>The quote is created by seasoned app analysts with more than 8 years of industry experience. We sign an NDA so your app idea is completely secure.</p>
      </div>
      {/* Right Side */}
      <div className='w-full lg:w-[40%] order-2 lg:order-none' data-aos="fade-right" data-aos-delay="200">
        <div className='bg-[#0071A0] px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-t-2xl w-full max-w-md mx-auto'>
          <h1 className='text-white text-lg md:text-xl font-semibold text-center'>Get in Touch With Experts Now</h1>
        </div>
        <div className="bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-b-2xl w-full max-w-md mx-auto shadow-sm">
          <form action="" className="flex flex-col gap-3 md:gap-4">
            <input
              className="border border-gray-300 hover:border-black rounded-md px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 w-full text-sm md:text-base transition-colors duration-200"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-gray-300 hover:border-black rounded-md px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 w-full text-sm md:text-base transition-colors duration-200"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-300 hover:border-black rounded-md px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 w-full text-sm md:text-base transition-colors duration-200"
              type="text"
              placeholder="Mobile Number"
            />
            <textarea
              name=""
              id=""
              placeholder="What is your project about?"
              className="border border-gray-300 hover:border-black rounded-md px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 w-full text-sm md:text-base transition-colors duration-200 resize-none"
              rows={4}
            ></textarea>
            <button
              className="bg-[#0071A0] hover:bg-black cursor-pointer transition-all duration-300 text-white px-4 py-2 sm:px-6 rounded-[4px] font-semibold flex justify-center items-center mt-2 md:mt-4 w-full sm:w-[100px] h-10 sm:h-12 mb-2 sm:mb-4 text-sm sm:text-base"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSection

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
    <div>
      <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-2 sm:px-4 md:px-6 lg:px-10" data-aos="fade-down" data-aos-delay="100">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center'>
          Why Settle for Mediocre
          <span className='text-[#0071A0] block sm:inline mt-2 sm:mt-0'> When You Can Have the Best?</span>
        </h1>
        <p className='text-xs sm:text-sm leading-6 mt-4 sm:mt-6 text-gray-500 mb-8 sm:mb-10 md:mb-12 text-center'>
          We're not just another dev shop—we're the team that delivers results that others can't. From cutting-edge tech to award-winning designs, we take your project from concept to market domination. When you work with us, you're working with the top 1%
        </p>
      </div>

      {/* Mediocre Card */}
      <div className="flex flex-col lg:flex-row mt-4 sm:mt-6 md:mt-8 w-full px-2 sm:px-4 md:px-6 lg:px-10 gap-4">
        {/* Left Card */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[35%] mb-4 lg:mb-0">
          <div className="w-full lg:w-auto flex-shrink-0 flex justify-center items-center">
            <img
              className="object-contain w-full max-w-[220px] sm:max-w-[260px] md:max-w-[310px] max-h-[180px] sm:max-h-[220px] md:max-h-[310px] mx-auto"
              src="/imgs/clutch.svg"
              alt="Mediocre"
            />
          </div>
          <div className="flex flex-col justify-between bg-[#F7F7F7] pt-6 sm:pt-8 pb-4 px-4 sm:px-6 rounded-tr-3xl rounded-br-3xl mt-4 lg:mt-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Alignable</h1>
              <h2 className="text-sm sm:text-base font-medium">REGIONAL DIRECTOR</h2>
              <div className="w-12 sm:w-16 h-[2px] sm:h-[2.5px] bg-[#242071] rounded-full"></div>
              <p className="text-xs sm:text-[11px] font-light max-w-full sm:max-w-[230px] mt-3 sm:mt-4">
                We treat you like a partner and build on your vision by showing you new possibilities and alternative that suit you better.
              </p>
            </div>
            <div className="flex justify-end mt-3">
              <span className="text-xs font-light">JULY 4 2022</span>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex flex-wrap w-full lg:w-[65%] gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
          {/* Card */}
          {[
            { icon: 'fa-users', text: 'Experienced Software Developers' },
            { icon: 'fa-shield-heart', text: 'Complete Peace of Mind Developers' },
            { icon: 'fa-calendar-check', text: 'Daily/ Weekly/ Monthly Reporting' },
            { icon: 'fa-headset', text: '24×7 Dedicated Support' },
            { icon: 'fa-comments', text: 'Transparent & Smooth Communication' },
            { icon: 'fa-certificate', text: '100% Quality Assurance' },
            { icon: 'fa-money-bill-wave', text: 'No Hidden Costs, 0 Overheads' },
            { icon: 'fa-piggy-bank', text: 'Cost-Effective Services' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-2 items-center rounded-lg hover:bg-[#0071A0] hover:text-white p-3 sm:p-4 w-full sm:w-[48%] md:w-[45%] lg:w-[240px] transition-colors duration-200"
            >
              <i className={`fa-solid ${item.icon} text-base sm:text-lg`} />
              <p className="text-xs sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-6 md:px-8 lg:px-20'>
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

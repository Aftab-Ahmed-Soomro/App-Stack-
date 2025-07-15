import React from 'react'
import NicheButton from '../common/NicheButton'
import NicheButton2 from '../common/NicheButton2'
import Button1 from '../common/Button1'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Niche = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center py-14' data-aos="fade-down" data-aos-delay="100">The story doesn't end here,<span className='text-[#0071A0]'>  we also do this....</span></h1>
      <div className='px-2 sm:px-14 flex flex-col sm:flex-row justify-between items-center gap-14'>
      {/* Left Box */}
      <div className='bg-blue-50 px-14 py-14 w-[100%] sm:w-[50%] flex flex-col gap-4 rounded-3xl' data-aos="fade-left" data-aos-delay="200">
        <NicheButton text="Mobile App Consulting" />
        <NicheButton text="Mobile UX & UI Designing" />
        <NicheButton text="Custom Mobile App Development" />
        <NicheButton text="Mobile App Integration" />
        <NicheButton text="App Maintenance & Support" />
      </div>

      {/* Right Box */}
      <div className='bg-[#2B2B2B] px-14 py-14 w-[100%] sm:w-[50%] flex flex-col gap-4 rounded-3xl' data-aos="fade-right" data-aos-delay="300">
        <NicheButton2 text="Mobile App Consulting" />
        <NicheButton2 text="Mobile UX & UI Designing" />
        <NicheButton2 text="Custom Mobile App Development" />
        <NicheButton2 text="Mobile App Integration" />
        <NicheButton2 text="App Maintenance & Support" />
      </div>
      </div>
      <div className='flex justify-center items-center mt-8 mb-20' data-aos="fade-up" data-aos-delay="400">
      <Button1 text="Talk To An Expert"/>
      </div>
    </div>
  )
}

export default Niche

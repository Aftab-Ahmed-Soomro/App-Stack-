import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Awards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="flex flex-col justify-between items-center border-gray-200 w-full"
      style={{
        background: 'linear-gradient(to bottom, #F9FFF0 0%, #F9FFF0 50%, #FFFFFF 50%, #FFFFFF 100%)'
      }}
    >
      {/* Awards Section */}
      <div className='bg-[#FFFFFF] px-4 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col border-b-8 justify-between mx-4 sm:mx-auto text-center max-w-[1100px] rounded-2xl sm:rounded-3xl shadow-lg'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-center' data-aos="fade-right" data-aos-delay="100">
          We Don't Just Build Apps,
          <span className='text-[#0071A0] block sm:inline mt-1 sm:mt-0'> We Win Awards</span>
        </h1>
        <p className='text-sm sm:text-base leading-6 mt-4 sm:mt-6 text-gray-500 mb-8 sm:mb-12 px-2 sm:px-4 md:px-8' data-aos="fade-left" data-aos-delay="200">
          From groundbreaking designs to seamless functionality, our award-winning apps don't just make waves—they set the standard. When you partner with us, you're working with the best in the business.
        </p>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-between items-center gap-6 sm:gap-8 md:gap-10'>
          <img src="/imgs/award1.webp" alt="award1" className='w-32 sm:w-36 md:w-auto' data-aos="fade-down" data-aos-delay="100" />
          <img src="/imgs/award2.webp" alt="award2" className='w-32 sm:w-36 md:w-auto' data-aos="fade-up" data-aos-delay="200" />
          <img src="/imgs/award3.webp" alt="award3" className='w-32 sm:w-36 md:w-auto' data-aos="fade-down" data-aos-delay="300" />
          <img src="/imgs/award4.webp" alt="award4" className='w-32 sm:w-36 md:w-auto' data-aos="fade-up" data-aos-delay="400" />
          <img src="/imgs/award5.webp" alt="award5" className='w-32 sm:w-36 md:w-auto' data-aos="fade-down" data-aos-delay="500" />
          <img src="/imgs/award6.webp" alt="award6" className='w-32 sm:w-36 md:w-auto' data-aos="fade-up" data-aos-delay="600" />
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className='mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-10 lg:px-14 max-w-[1100px] mx-auto'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-center' data-aos="fade-up" data-aos-delay="100">
          We are NOT your Average
          <span className='text-[#0071A0] block sm:inline mt-1 sm:mt-0'> App Developers!</span>
        </h1>
        <p className='text-sm sm:text-base leading-6 mt-4 sm:mt-6 text-gray-500 mb-8 sm:mb-12 text-center px-2 sm:px-4 md:px-8' data-aos="fade-up" data-aos-delay="200">
          Our Apps are not for the faint-hearted; They have the tendency to wow anyone! Whether it's Android, iOS, Flutter, or immersive game apps, our development expertise spans every platform. Why settle for average when you can have exceptional? We don't just develop apps, we create experiences that dominate the charts.
        </p>
      </div>
    </div>
  )
}

export default Awards

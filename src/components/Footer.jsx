import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#313131] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 py-6 mt-16'>
      {/* Left Side */}
      <div className='w-full md:w-[35%] mb-8 md:mb-0'>
        <div className='flex flex-col gap-1 mb-4 sm:mb-2'>
          <p className='text-white text-base sm:text-sm'>Address</p>
          <span className='text-[#999999] text-sm'>Century Plaza Towers, 2029 Century Park E #400n, Los Angeles, CA 90067</span>
        </div>
        <div className='flex flex-col gap-1 mb-4 sm:mb-2'>
          <p className='text-white text-base sm:text-sm'>Phone</p>
          <span className='text-[#999999] text-sm'>+1 213-930-3430</span>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-white text-base sm:text-sm'>Email</p>
          <span className='text-[#999999] text-sm'>info@appstackstudios.com</span>
        </div>
      </div>
      {/* Right Side */}
      <div className='w-full md:w-[65%] flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8'>
        <div className='w-[30%] sm:w-auto'>
          <img src="/imgs/footer-1.webp" alt="logo" className='w-full sm:w-auto' />
        </div>
        <div className='w-[30%] sm:w-auto'>
          <img src="/imgs/footer-2.webp" alt="logo" className='w-full sm:w-auto' />
        </div>
        <div className='w-[30%] sm:w-auto'>
          <img src="/imgs/footer-3.webp" alt="logo" className='w-full sm:w-auto' />
        </div>
        <div className='w-[30%] sm:w-auto'>
          <img src="/imgs/footer-4.webp" alt="logo" className='w-full sm:w-auto' />
        </div>
        <div className='w-[30%] sm:w-auto'>
          <img src="/imgs/footer-5.webp" alt="logo" className='w-full sm:w-auto' />
        </div>
      </div>
    </div>
  )
}

export default Footer

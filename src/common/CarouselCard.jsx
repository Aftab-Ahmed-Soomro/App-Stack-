import React from 'react'
import CarouselButton from './CarouselButton'

const CarouselCard = ({heading, paragraph, img, bgColor}) => {
  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex flex-col lg:flex-row justify-between items-center relative p-4 sm:p-6 md:p-8 lg:p-0" style={{ backgroundColor: bgColor }}>
      {/* Left Side */}
      <div className='w-full lg:w-[60%] px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-30 text-center lg:text-left'>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
          <button className='text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300'>Mobile App</button>
          <button className='text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300'>Eccommerce</button>
        </div>
        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 sm:mt-8 lg:mt-10'>{heading}</h1>
        <p className='text-white text-xs sm:text-sm mt-4 sm:mt-5 lg:mt-6 mb-8 sm:mb-12 lg:mb-16 max-w-xl'>{paragraph}</p>
        <div className="flex justify-center lg:justify-start">
          <CarouselButton text={"Connect Us"} />
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full lg:w-[40%] pt-6 lg:absolute lg:bottom-0 lg:right-0'>
        <img 
          className='w-full h-auto object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-none' 
          src={img} 
          alt={heading || "Carousel image"} 
        />
      </div>
    </div>
  )
}

export default CarouselCard

import React from 'react'
import CarouselButton from './CarouselButton'

const CarouselCard = ({heading, paragraph, img, bgColor}) => {
  return (
    <div className="mx-8 flex justify-between items-center relative" style={{ backgroundColor: bgColor }}>
      {/* Left Side */}
      <div className='w-[60%] px-16 pt-20 pb-30'>
        <div className="flex items-center gap-3">
        <button className='text-white text-sm px-6 py-2 rounded-4xl border-1 border-white'>Mobile App</button>
        <button className='text-white text-sm px-6 py-2 rounded-4xl border-1 border-white'>Eccommerce</button>
        </div>
        <h1 className='text-white text-5xl font-semibold mt-10'>{heading}</h1>
        <p className='text-white text-sm mt-6 mb-16'>{paragraph}</p>
        <CarouselButton text={"Connect Us"} />
      </div>

      {/* Right Side */}
      <div className='w-[40%] pt-6 absolute bottom-0 right-0'>
        <img className='' src={img} alt="hello" />
      </div>
    </div>
  )
}

export default CarouselCard

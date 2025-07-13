import React from 'react'

const ServiceCards = ({image, text}) => {
  return (
    <div className='bg-white py-6 rounded-3xl flex flex-col justify-center items-center'>
      {/* icon */}
    <img className='mb-2' src={image} alt="achievement-icon" />
      
      {/* title */}
      <p className='text-center text-sm w-[120px]'>{text}</p>
    </div>
  )
}

export default ServiceCards

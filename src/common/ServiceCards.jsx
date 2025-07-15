import React from 'react'

const ServiceCards = ({image, text, isActive, onClick}) => {
  return (
    <div 
      className={`py-6 rounded-3xl flex flex-col justify-center items-center cursor-pointer transition-colors duration-300 ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}
      onClick={onClick}
    >
      {/* icon */}
      <i class={`${image} text-2xl mb-2`} />
      
      {/* title */}
      <p className='text-center text-sm w-[120px]'>{text}</p>
    </div>
  )
}

export default ServiceCards

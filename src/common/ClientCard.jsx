import React from 'react'

const ClientCard = ({name, designation, paragraph, img, bgColor, color}) => {
  return (
    <div 
      style={{ backgroundColor: bgColor }} 
      className="mx-2 sm:mx-4 md:mx-6 px-4 sm:px-6 pt-4 sm:pt-6 pb-12 sm:pb-16 md:pb-20 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-lg"
    >
      <div className='flex items-center gap-3 sm:gap-4'>
        <div className='w-12 sm:w-14 md:w-16'>
          <img src={img} alt={`${name}'s profile`} className="w-full h-auto rounded-full" />
        </div>
        <div style={{ color: color }}>
          <h1 className='font-semibold text-sm sm:text-base'>{name}</h1>
          <p className='text-xs sm:text-sm'>{designation}</p>
        </div>
      </div>
      <p 
        style={{ color: color }} 
        className='text-xs sm:text-sm font-normal mt-2 sm:mt-3 md:mt-4 leading-relaxed'
      >
        {paragraph}
      </p>
    </div>
  )
}

export default ClientCard

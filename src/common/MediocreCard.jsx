import React from 'react'

const MediocreCard = ({heading, paragraph}) => {
  return (
    <div className='border border-gray-300 flex flex-col justify-center items-center rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-16 hover:border-[#0071A0] transition-colors duration-300 hover:shadow-lg'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{heading}</h1>
      <p className='text-sm sm:text-base font-semibold mt-2'>{paragraph}</p>
    </div>
  )
}

export default MediocreCard

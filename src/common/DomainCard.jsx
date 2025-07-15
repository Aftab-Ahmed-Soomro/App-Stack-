import React from 'react'

const DomainCard = ({heading, paragraph, icon}) => {
  return (
    <div className='bg-[#FCFCFC] hover:bg-[#0071A0] transition-all duration-500 rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-6 md:px-6 md:py-8 lg:py-10 group hover:shadow-xl'>
      <div className='flex flex-col items-center gap-3 sm:gap-4'>
        <i className={`${icon} text-2xl sm:text-3xl md:text-4xl text-[#0071A0] group-hover:text-white transition-colors duration-500`}></i>
        <h1 className='text-base sm:text-lg font-semibold text-center group-hover:text-white transition-colors duration-500'>{heading}</h1>
        <p className='text-xs sm:text-sm text-gray-500 text-center px-2 sm:px-4 md:px-8 group-hover:text-white transition-colors duration-500 leading-relaxed'>{paragraph}</p>
      </div>
    </div>
  )
}

export default DomainCard

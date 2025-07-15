import React from 'react'

const StartupCard = ({text, icon}) => {
  return (
    <div className='bg-[#313131] rounded-lg hover:bg-[#0071A0] transition-colors duration-300 group'>
      <div className='flex items-center gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-3 sm:py-4'>
        <i className={`${icon} text-white text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
        <p className='text-white text-sm sm:text-base font-medium'>{text}</p>
      </div>
    </div>
  )
}

export default StartupCard

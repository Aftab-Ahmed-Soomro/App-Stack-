import React from 'react'

const NicheButton = ({text}) => {
  return (
    <div>
        <div className='flex items-center bg-white rounded-xl py-4 px-10 max-w-[450px] border-x-1 border-x-amber-200'>
          <img className='mb-2 object-contain w-[40px] h-[40px] me-6' src="/imgs/icon1.png" alt="achievement-icon" />
          <h1>{text}</h1>
        </div>
    </div>
  )
}

export default NicheButton

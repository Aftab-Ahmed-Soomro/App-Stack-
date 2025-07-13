import React from 'react'

const NicheButton2 = ({text}) => {
  return (
    <div>
        <div className='flex items-center bg-[#323232] rounded-xl py-4 px-10 max-w-[450px] text-white border-1 border-white'>
          <img className='mb-2 object-contain w-[40px] h-[40px] me-6' src="/imgs/icon-grey.png" alt="achievement-icon" />
          <h1>{text}</h1>
        </div>
    </div>
  )
}

export default NicheButton2

import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Button1 = ({text}) => {
  return (
    <div>
      <button className='bg-[#0071A0] hover:bg-black cursor-pointer transition-all duration-300 text-white px-6 py-2 rounded-[4px] font-semibold flex justify-center items-center mt-6'>
      {text}
      <FaAngleRight className='mt-1' />
      <FaAngleRight className='mt-1' />
      </button>
    </div>
  )
}

export default Button1

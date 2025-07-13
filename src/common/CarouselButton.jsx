import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const CarouselButton = ({text}) => {
  return (
    <button className="hover:bg-black cursor-pointer transition-all duration-300 text-white px-6 py-2 rounded-[4px] font-semibold flex justify-center items-center mt-6 border-1 border-white">
      {text}
      <FaAngleRight className='mt-1' />
      <FaAngleRight className='mt-1' />
    </button>
  );
};

export default CarouselButton;

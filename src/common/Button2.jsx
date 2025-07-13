import React from "react";

const Button2 = ({text}) => {
  return (
    <button className="bg-[#0071A0] hover:bg-black cursor-pointer transition-all duration-300 text-white px-6 py-2 rounded-[4px] font-semibold flex justify-center items-center mt-6 border-1 border-white">
      {text}
    </button>
  );
};

export default Button2;

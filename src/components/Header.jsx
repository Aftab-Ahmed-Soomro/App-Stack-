import React from 'react'

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2A2A2A] text-white flex flex-col md:flex-row md:justify-end md:items-center gap-2 md:gap-4 text-xs sm:text-sm py-2 md:py-3 px-4 md:pr-20">
        <div className="flex  items-start xs:items-center gap-0 xs:gap-1">
          <p className="font-semibold mr-1">Call Now:</p>
          <p className="break-all">+1 213-930-3430</p>
        </div>
        <div className="hidden md:block">|</div>
        <div className="flex  items-start xs:items-center gap-0 xs:gap-1">
          <p className="font-semibold mr-1">Email Now:</p>
          <p className="break-all">info@appstackstudios.com</p>
        </div>
      </div>
      {/* Logo Bar */}
      <div className="py-2 flex justify-center md:justify-start px-4 md:px-0">
        <img
          className="h-12 w-32 sm:h-[70px] sm:w-[180px] md:h-[90px] md:w-[250px] object-contain cursor-pointer"
          src="/imgs/logo.png"
          alt="logo"
        />
      </div>
    </>
  )
}

export default Header

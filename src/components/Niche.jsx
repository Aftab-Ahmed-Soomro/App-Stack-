import React from 'react'
import NicheButton from '../common/NicheButton'
import NicheButton2 from '../common/NicheButton2'
import Button1 from '../common/Button1'

const Niche = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center py-14'>The story doesn't end here,<span className='text-[#0071A0]'>  we also do this....</span></h1>
      <div className='px-14 flex gap-14'>
      {/* Left Box */}
      <div className='bg-blue-50 px-14 py-14 w-[50%] flex flex-col gap-4 rounded-3xl'>
        <NicheButton text="Mobile App Consulting" />
        <NicheButton text="Mobile UX & UI Designing" />
        <NicheButton text="Custom Mobile App Development" />
        <NicheButton text="Mobile App Integration" />
        <NicheButton text="App Maintenance & Support" />
      </div>

      {/* Right Box */}
      <div className='bg-[#2B2B2B] px-14 py-14 w-[50%] flex flex-col gap-4 rounded-3xl'>
        <NicheButton2 text="Mobile App Consulting" />
        <NicheButton2 text="Mobile UX & UI Designing" />
        <NicheButton2 text="Custom Mobile App Development" />
        <NicheButton2 text="Mobile App Integration" />
        <NicheButton2 text="App Maintenance & Support" />
      </div>
      </div>
      <div className='flex justify-center items-center mt-8 mb-20'>
      <Button1 text="Talk To An Expert"/>
      </div>
    </div>
  )
}

export default Niche

import React from 'react'
import ServiceCards from '../common/ServiceCards'
import Button2 from '../common/Button2'

const Services = () => {
  return (
    <div className='bg-[#2A2A2A] pb-10'>
      <div className='bg-[#0071A0] mx-20 px-4 py-8 rounded-b-4xl flex justify-between items-center mb-10'>
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
        <ServiceCards image="/imgs/icon1.png" text="Android App Development" />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center'>
        {/* Left Side */}
        <div className='w-[65%] px-20 py-8 text-white'>
            <h1 className='text-5xl font-semibold max-w-[500px] mb-10'>Cross Platform App Development</h1>
            <p className='max-w-[530px]'>Maximize your app’s reach and ROI with cross-platform development from Limegreensapps. Using advanced frameworks like Flutter and React Native, we build apps that run seamlessly on both Android and iOS, offering a native-like experience without the need for separate development. Our cross-platform solutions ensure quality, consistent performance, and the ability to quickly reach users across devices, helping your brand grow faster with an efficient, user-focused app.</p>
            <Button2 text="Know Your App Cost" />
        </div>
        {/* Right Side */}
        <div className='w-[35%]'>
            <img src="/imgs/mobile-consulting-3.png" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services

import React from 'react'
import AchievementCard from '../common/AchievementCard'
import Button1 from '../common/Button1'

const FormSection = () => {
  return (
    <div className='bg-[#F5F9FB] px-20 py-14 flex justify-between items-center'>
      {/* Left Side */}
      <div className='w-[60%] mb-12'>
        <h1 className='text-[#0071A0] text-lg'>#1 US App Development Company</h1>
        <h1 className='text-[40px] font-semibold'>Bring Your <span className='text-[#0071A0]'> App Idea to Life </span> with an</h1>
        <h1 className='text-[40px] font-semibold'>Award-winning Development Team</h1>
        <p className='text-sm leading-6 mt-2'>Build powerful, user-focused iOS and Android apps with Limegreensapps. We deliver high-performance apps that drive growth, boost engagement, and maximize ROI. Perfect for businesses of any size, our solutions are tailored to meet your unique goals and deliver real results.</p>
        <h1 className='text-xl font-semibold mt-4 mb-4'>Get 2X Faster Delivery and Save up to 40% on Costs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[630px]">
          <AchievementCard image="/imgs/icon1.png" text="Project kickoff with just 10% Payment" />
          <AchievementCard image="/imgs/icon2.png" text="100% Money-back Guarantee" />
          <AchievementCard image="/imgs/icon3.png" text="150+ Certified Developers" />
        </div>
        <Button1 text="Get a Free Quote in less than 12 hrs"/>
        <p className='text-sm leading-6 mt-10 text-gray-500 max-w-xl'>The quote is created by seasoned app analysts with more than 8 years of industry experience. We sign an NDA so your app idea is completely secure.</p>
      </div>
      {/* Right Side */}
      <div className='w-[40%] rounded-4xl'>
        <div className='bg-[#0071A0] px-8 py-6 sm:px-6 md:px-8 rounded-t-2xl w-full max-w-md mx-auto'>
          <h1 className='text-white text-xl font-semibold text-center'>Get in Touch With Experts Now</h1>
        </div>
        <div className="bg-white px-4 py-6 sm:px-6 md:px-8 rounded-b-2xl w-full max-w-md mx-auto">
          <form action="" className="flex flex-col gap-4">
            <input
              className="border border-gray-300 hover:border-black rounded-md px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 w-full text-sm sm:text-base transition-colors duration-200"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-gray-300 hover:border-black rounded-md px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 w-full text-sm sm:text-base transition-colors duration-200"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-300 hover:border-black rounded-md px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 w-full text-sm sm:text-base transition-colors duration-200"
              type="text"
              placeholder="Mobile Number"
            />
            <textarea
              name=""
              id=""
              placeholder="What is your project about?"
              className="border border-gray-300 hover:border-black rounded-md px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 w-full text-sm sm:text-base transition-colors duration-200 resize-none"
              rows={4}
            ></textarea>
            <button
              className="bg-[#0071A0] hover:bg-black cursor-pointer transition-all duration-300 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-[4px] font-semibold flex justify-center items-center mt-4 w-[100px] h-12 mb-4 text-base"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSection

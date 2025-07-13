import React from 'react'

const Awards = () => {
  return (
    <div
      className="flex flex-col justify-between items-center border-gray-200 w-full"
      style={{
        background: 'linear-gradient(to bottom, #F9FFF0 0%, #F9FFF0 50%, #FFFFFF 50%, #FFFFFF 100%)'
      }}
    >
      <div className='bg-[#FFFFFF] px-14 py-14 flex flex-col border-b-8 justify-between mx-auto text-center max-w-[1100px] rounded-3xl'>
        <h1 className='text-3xl font-semibold text-center'>We Don't Just Build Apps,<span className='text-[#0071A0]'>  We Win Awards</span></h1>
        <p className='text-sm leading-6 mt-6 text-gray-500 mb-12'>From groundbreaking designs to seamless functionality, our award-winning apps don’t just make waves—they set the standard. When you partner with us, you're working with the best in the business.</p>
        <div className='flex justify-between items-center'>
            <img src="/imgs/award1.webp" alt="award1" />
            <img src="/imgs/award2.webp" alt="award2" />
            <img src="/imgs/award3.webp" alt="award3" />
            <img src="/imgs/award4.webp" alt="award4" />
            <img src="/imgs/award5.webp" alt="award5" />
            <img src="/imgs/award6.webp" alt="award6" />
        </div>
      </div>
      <div className='mt-20 px-14'>
        <h1 className='text-3xl font-semibold text-center'>We are NOT your Average<span className='text-[#0071A0]'>  App Developers!</span></h1>
        <p className='text-sm leading-6 mt-6 text-gray-500 mb-12 text-center'>Our Apps are not for the faint-hearted; They have the tendency to wow anyone! Whether it’s Android, iOS, Flutter, or immersive game apps, our development expertise spans every platform. Why settle for average when you can have exceptional? We don't just develop apps, we create experiences that dominate the charts.</p>
      </div>
    </div>
  )
}

export default Awards

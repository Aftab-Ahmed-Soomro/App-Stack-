import React from 'react'

const AchievementCard = ({image, text}) => {
  return (
    <div className='bg-white px-8 py-6 rounded-3xl w-[200px]'>
      {/* icon */}
      <img className='mb-2' src={image} alt="achievement-icon" />
      
      {/* title */}
      <p className='w-[150px]'>{text}</p>
    </div>
  )
}

export default AchievementCard

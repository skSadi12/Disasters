import React from 'react'

function Card({image,p1,p2,p3}) {
  return (
    <div>
      <div className='space-y-3'>
        <img src={image} alt="" />
        <p className='font-semibold'>{p1}</p>
        <p className='text-[#71717A] text-[14px]'>{p2}</p>
        <p className='font-semibold'>{p3}</p>
      </div>
    </div>
  )
}

export default Card

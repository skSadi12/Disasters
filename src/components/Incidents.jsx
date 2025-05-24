import React, { useState } from 'react'
import cn from './libs/index'
function Incidents() {
    const [active,setActive]=useState(10)
    const images = [
        {
            img:'/Incident1.png',
            text:"Avalanche"
        },
        {
            img:'/Incident2.png',
            text:"Biological"
        },
        {
            img:'/Incident3.png',
            text:"Blizzard"
        },
        {
            img:'/Incident4.png',
            text:"Cold/Freezing"
        },
        {
            img:'/Incident5.png',
            text:"Drought"
        },
        {
            img:'/Incident6.png',
            text:"Earthquake"
        },
        {
            img:'/Incident7.png',
            text:"Flooding"
        },
        {
            img:'/Incident8.png',
            text:"Heat Wave"
        },
        {
            img:'/Incident9.png',
            text:"Hail"
        },
        {
            img:'/Incident10.png',
            text:"Lightning"
        },
        {
            img:'/Incident11.png',
            text:"Man Made"
        },
        {
            img:'/Incident12.png',
            text:"Mudslide"
        },
        {
            img:'/Incident13.png',
            text:"Severe Storm"
        },
        {
            img:'/Incident13.png',
            text:"Strong Wind"
        },
        {
            img:'/Incident15.png',
            text:"Tornado"
        },
        {
            img:'/Incident16.png',
            text:"Tsunami"
        },
        {
            img:'/Incident17.png',
            text:"Volcanic Eruption"
        },
        {
            img:'/Incident18.png',
            text:"Wildfire"
        },
    ]
  return (
    <section className="max-w-[800px] mx-auto mt-10 p-5 md:p-1 ">
      <h2 className='text-[24px] font-bold  '>Which of these best describes the incident?</h2>
        <div className='flex flex-wrap gap-5 my-10 items-center justify-center '>
            {images?.map((data,i)=>(
                <button key={i}  className={cn(
                    'bg-[#F4F4F5] gap-5 justify-center items-center  w-[180px] p-1 h-[70px] inline-flex rounded-xl', active === i && ' bg-[#F26922] text-white'
                )} active={active === i} onClick={()=>setActive(i)} >
                    <img src={data.img} className='size-[25px]' alt="" />
                    <p>{data.text}</p>
                    
                </button>
            ))}
        </div>
    </section>
  )
}

export default Incidents

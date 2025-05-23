import React from 'react'
import Search from './sheard/Search'
import OrBtn from './sheard/OrBtn'

function Dashboard() {
  return (
    <section className='bg-[#E4E4E7] px-5 py-4'>
        <div className='max-w-[1400px] mx-auto px-5 flex justify-between gap-10 flex-col sm:flex-row'>
            <div className='md:text-start text-center'>
                <p className='text-[12px] text-[#71717A]  '>Welcome back</p>
                <h2 className='text-[26px] '>Dashboard</h2>
            </div>
            <div className='flex items-center gap-2 flex-col md:flex-row'>
                <Search/> 
                <div className='flex bg-white rounded-[5px]   p-1'>
                      
                    <input type="text" placeholder='Sort By: Date modified' className='outline-0'/>
                </div>
                <OrBtn>Cypher AI</OrBtn>
            </div>
        </div>
      
    </section>
  )
}

export default Dashboard

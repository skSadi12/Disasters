import React from 'react'

function NewInsIn() {
  return (
    <section className=' max-w-[750px] mx-auto px-5 my-10 '>
      <div className='space-y-4'>
        <h2 className='text-[24px] font-bold'>Let’s give the incident a title?</h2>
        <p className='text-[#71717A] text-[14px] font-semibold '>Make a title that will easily identify the incidents</p>
        <div>
            <input type="text" placeholder='Add title here' className='w-full py-5 pl-5 rounded-xl bg-[#F4F4F5]' />
        </div>
      </div>
      <div className='space-y-4 mt-20'>
        <h2 className='text-[24px] font-bold'>Describe what happened during the incident? </h2>
        <p className='text-[#71717A] text-[14px] font-semibold '>Share some information about the incident. The when, where, how. </p>
        <div>
            <textarea type="text" placeholder='Type here' className='w-full min-h[130px] py-5 pl-5 rounded-xl bg-[#F4F4F5]' />
        </div>
      </div>
    </section>
  )
}

export default NewInsIn


import React from 'react'
import Stepper from './sheard/Stepper'

function Progress() {
  return (
    <section className='max-w-[800px] mx-auto mt-16 px-5 '>
      <div className='space-y-10'>
        <div className='text-center max-w-[450px] mx-auto '>
            <h2 className='text-[32px] font-bold mb-5'>Let’s get started</h2>
            <p >Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit genert6dygt7huy8fgertygtuyfg</p>
        </div>
        <Stepper/>
        <div className=''>
            <div>
                {/* <div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 max-h-[270px] space-y-8 '>
                    <img src="/progress1.png" alt="" />
                    <h3 className='font-bold text-[20px]'>What type of incident?</h3>
                    <p className='text-[14px]'>Choose the category that best describes the incident.</p>
                </div> */}
                {/* <div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 max-h-[270px] space-y-8 '>
                    <img src="/progress2.png" alt="" />
                    <h3 className='font-bold text-[20px]'>Tell us about the incident?</h3>
                    <p className='text-[14px]'>Let’s connect the dots and see where to start.</p>
                </div> */}
                {/* <div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 max-h-[270px] space-y-8 '>
                    <img src="/progress3.png" alt="" />
                    <h3 className='font-bold text-[20px]'>Where did the incident occur?</h3>
                    <p className='text-[14px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                </div> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Progress

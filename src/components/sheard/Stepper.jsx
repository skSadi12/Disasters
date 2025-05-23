import React from 'react'

function Stepper() {
    const steps = [
        {
            content: <div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 '>
                    <img src="/progress1.png" alt="" />
                    <h3 className='font-bold text-[20px]'>What type of incident?</h3>
                    <p className='text-[14px]'>Choose the category that best describes the incident.</p>
                </div>,
        },
        {
            content:
            <div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 '>
                    <img src="/progress2.png" alt="" />
                    <h3 className='font-bold text-[20px]'>Tell us about the incident?</h3>
                    <p className='text-[14px]'>Let’s connect the dots and see where to start.</p>
                </div>,
        },
        {
            content:<div className='bg-[#E4E4E7] max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 '>
                    <img src="/progress3.png" alt="" />
                    <h3 className='font-bold text-[20px]'>Where did the incident occur?</h3>
                    <p className='text-[14px]'>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>,
        }
    ]
  return (
    <div>
        <div className='flex  gap-10 justify-center items-center'>
            {steps?.map((content,i)=>(
                <div key={i}>
                    <div className='h-8 w-8 relative flex justify-center items-center text-white rounded-[50%]  bg-gray-400'>{i + 1}
                        {i < steps.length - 1 && <div className='h-1 absolute w-10 left-8  bg-black'></div>}
                    </div>

                </div>
            ))}
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row  gap-6 mt-10'>
            {steps?.map((content,i)=>(
                <div key={i}>
                    {content.content}
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Stepper

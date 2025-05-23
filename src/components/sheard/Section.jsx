import React from 'react'

function Section({children}) {
  return (
    <section className='max-w-[1400px] mx-auto px-5'>
      {children}
    </section>
  )
}

export default Section

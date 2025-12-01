import React from 'react'

const PageLeft = () => {
  return (
    <div className='p-50 h-[85vh] w-1/2 '>
      <h3 className='text-[20px] tracking-[10px] text-[#ea610b]'>LET DO SOMETHING</h3>
      <h1 className='text-9xl font-bold'>Creative.</h1>
      <div className='flex gap-7 py-15 text-[15px] font-semibold'>
        <button className='tracking-[4px] px-8 py-2 border-solid bg-[#EA7C37] rounded-full text-white'>CONTACT</button>
        <button className='tracking-[4px] px-8 py-2 border-solid border-2 rounded-full'>ABOUT US</button>
      </div>
    </div>
  )
}

export default PageLeft

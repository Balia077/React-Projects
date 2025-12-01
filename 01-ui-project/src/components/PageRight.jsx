import React from 'react'

const PageRight = () => {
    return (
        <div className='flex gap-20 justify-center h-[85vh] w-1/2'>
            <img className='z-10 h-150 absolute' src='RightImg.png' alt="" />
            <div className='bg-[#8F4BC3] absolute h-60 w-30 rounded-full ml-60 opacity-65'></div>
            <div className='bg-[#8F4BC3] absolute h-60 w-30 rounded-full mr-60 mt-80 opacity-65'></div>
            <div className='bg-[#8F4BC3] absolute h-10 w-10 rounded-full mt-50 ml-100'></div>
            <div className='bg-[#8F4BC3] absolute h-10 w-10 rounded-full mt-80 mr-100'></div>
            <div className='absolute bg-[#7434a2] h-150 w-60'></div>

            <div className='absolute bg-[#703897] h-90.5 w-3 ml-100 mt-59.5'></div>
            <div className='absolute bg-[#703897] h-80.5 w-3 mr-100'></div>
        </div>
    )
}

export default PageRight

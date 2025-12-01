import React from 'react'
import PageLeft from './PageLeft'
import PageRight from './PageRight'

function Page() {
  return (
    <div className='flex'>
      <PageLeft />
      <PageRight />
    </div>
  )
}

export default Page

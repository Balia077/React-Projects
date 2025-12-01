import React from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='h-25 w-full flex'>
      <NavLogo />
      <NavLinks />
    </div>
  )
}

export default Navbar

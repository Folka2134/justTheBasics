import React from 'react'

import logo from "../images/justTheBasicsSmall.png"

export const Navbar = () => {
  return (
    <div className='h-14 w-full bg-white border-b-2'>
      <div className='flex'>
        <img src={logo} alt="" className='h-14' />
        <ul className='h-full flex p-2'>
          <li className='p-2'>test</li>
          <li className='p-2'>test</li>
          <li className='p-2'>test</li>
          <li className='p-2'>test</li>
        </ul>
      </div>
    </div>
  )
}

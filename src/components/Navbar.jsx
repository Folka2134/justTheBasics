import React from 'react'

import logo from "../images/justTheBasicsSmall.png"

export const Navbar = () => {
  return (
    <>
      <div className='h-14 w-full bg-white border-b-2 truncate'>
        <div className='flex'>
          <img src={logo} alt="" className='h-14' />
          <ul className='h-full flex p-2'>
            <li className='p-2 underline'>CRUD-app</li>
            <li className='p-2 underline'>React Game</li>
            <li className='p-2 underline'>Api Weather</li>
            <li className='p-2 underline'>Api News</li>
          </ul>
        </div>
      </div>
      <div className='h-10 w-full grid bg-white border-b-2 justify-center content-center'><p className='text-sm'>Compilation of basic projects displaying a strong foundation.</p></div>
    </>
  )
}

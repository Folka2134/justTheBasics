import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

// import App from '../App';
import { Todo } from './Todo/Todo';

import logo from "../images/justTheBasicsSmall.png"

export const Navbar = () => {
  return (
    <>
      <div className='h-14 w-full bg-white border-b-2 truncate'>
        <div className='flex'>
          <Link to="/"><img src={logo} alt="" className='h-14' /></Link>
          <ul className='h-full flex p-2'>
            <Link to="/todo"><li className='p-2 underline'>CRUD-app</li></Link>
            <li className='p-2 underline'>React Game</li>
            <li className='p-2 underline'>Api Weather</li>
            <li className='p-2 underline'>Api News</li>
          </ul>
        </div>
      </div>
      <div className='h-10 w-full grid bg-white border-b-2 justify-center content-center'><p className='text-sm'>Compilation of basic projects displaying a strong foundation.</p></div>
      <Routes>
        {/* <Route path="*" element={ } /> */}
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

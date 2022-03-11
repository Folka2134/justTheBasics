import React from 'react'

import { Link } from "react-router-dom";

import crudLogo from "../images/crudLogo.png"
import gameLogo from "../images/gameLogo.png"
import weatherLogo from "../images/weatherLogo.png"
import newsLogo from "../images/newsLogo.png"

export const Home = () => {
  return (
    <>
      <div className='h-10 grid bg-white border-b-2 justify-center content-center'><p className='text-sm'>Compilation of basic projects displaying a strong foundation.</p></div>
      <div className='h-screen bg-purple-700 grid justify-center content-center'>
        <div className='h-fit w-[400px] grid grid-rows-2 grid-cols-2 bg-green-2 border-2 rounded-md'>
          <Link to="/todo"><div className='border'><img src={crudLogo} alt="" /></div></Link>
          <Link to="/game"><div className='border'><img src={gameLogo} alt="" /></div></Link>
          <Link to="/weather"><div className='border'><img src={weatherLogo} alt="" /></div></Link>
          <Link to="/news"><div className='border'><img src={newsLogo} alt="" /></div></Link>
        </div>
      </div>
    </>
  )
}

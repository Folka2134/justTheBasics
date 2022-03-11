import React from 'react'

export const CardList = () => {
  return (
    <div className='h-full flex justify-center text-cyan-400'>
      <ul className='flex flex-wrap justify-center'>
        <li className='bg-[#1D18C7] h-96 w-64 m-6 overflow-clip'>
          <div className='w-64 p-6 absolute flex justify-between'>
            <p className='bg-[#1D18C7] border-2 border-cyan-400 p-4'>Icon1</p>
            <p className='bg-[#1D18C7] border-2 border-cyan-400 p-4'>Icon2</p>
          </div>
          <img src="https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg" alt="testimage" className='bg-black h-2/3' />
          <h1 className='text-lg border-black text-center'>Country</h1>
          <h2 className='border-b-2 border-black text-center'>City</h2>
          <div className='flex justify-evenly'>
            <div className='w-full border-r-2 border-black p-1 '>
              <p className='text-sm'>Windspeed: 5mph</p>
              <p>data</p>
              <p>data</p>
            </div>
            <div className='w-full p-1'>
              <p>data</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

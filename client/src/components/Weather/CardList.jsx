import React from 'react'
import { Card } from './Card'

export const CardList = () => {
  return (
    <div className='h-full flex justify-center text-cyan-400'>
      <ul className='flex flex-wrap justify-center'>
        <Card />
      </ul>
    </div>
  )
}

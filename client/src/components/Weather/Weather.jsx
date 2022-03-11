import React from 'react'
import { CardList } from './CardList'

export const Weather = () => {
  return (
    <div className='h-full min-h-screen bg-blue-800 flex'>
      <div className='flex h-full m-8 mt-16 bg-blue-900 bg-opacity-80'>
        <CardList />
      </div>
    </div>
  )
}

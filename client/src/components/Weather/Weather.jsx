import React from 'react'
import { CardList } from './CardList'
import { SearchBox } from './SearchBox'

export const Weather = () => {
  return (
    <div className='h-full min-h-screen bg-blue-800 flex'>
      <div className="h-full m-8 mt-16 ">
        <SearchBox />
        history
      </div>
      <div className='flex h-full m-8 mt-32 bg-blue-900 bg-opacity-80'>
        <CardList />
      </div>
    </div >
  )
}

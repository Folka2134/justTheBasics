import React from 'react'

import { Input } from './Input'
import { List } from './List'

import { GlobalProvider } from './context/GlobalState'

export const Todo = () => {
  return (
    <div className='h-screen bg-red-800 grid justify-center'>
      <div className='mt-10'>
        <GlobalProvider>
          <Input />
          <List />
        </GlobalProvider>
      </div>
    </div>
  )
}

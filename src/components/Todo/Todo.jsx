import React from 'react'

import { Input } from './Input'
import { List } from './List'

export const Todo = () => {
  return (
    <div className='h-screen bg-red-800 grid justify-center content-center'>
      <Input />
      <List />
    </div>
  )
}

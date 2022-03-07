import React, { useState, useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const Input = () => {
  const [todo, setTodo] = useState('')
  const { addTodo } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      todo
    }

    addTodo(newTodo)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='new todo' onChange={(e) => setTodo(e.currentTarget.value)} />
      <button className='bg-[#0ECF55] p-2'>+</button>
    </form>
  )
}

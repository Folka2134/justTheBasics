import React, { useState, useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const Input = () => {
  const [text, setText] = useState('')
  const { addTodo } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      // _id: Math.floor(Math.random() * 1000000),
      text
    }

    if (text.length > 1) {
      addTodo(newTodo)
      e.currentTarget.reset()
    }

  }

  return (
    <form onSubmit={onSubmit} className="border-b-2 border-black p-2">
      <input type="text" placeholder='new todo' onChange={(e) => setText(e.currentTarget.value)} />
      <button className='bg-[#0ECF55] p-2'>+</button>
    </form>
  )
}

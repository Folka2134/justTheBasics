import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    // <li className='flex justify-between'><span>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)}>x</button></li>
    <li className='w-60 p-1 flex justify-between bg-[#CFA904] border-2 border-[#E6D307]'>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="h-8 px-2 bg-[#CEDB07] hover:bg-[#CF2B23] border-black border-2 transition-all duration-200 rounded-3xl"><bold>X</bold></button>
    </li>
  )
}
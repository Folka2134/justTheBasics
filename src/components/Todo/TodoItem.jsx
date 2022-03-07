import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    // <li className='flex justify-between'><span>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)}>x</button></li>
    <li className='w-60 flex justify-between bg-[#CFA904] border-2 '>
      <span>
        {todo.todo}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="m-1">x</button>
    </li>
  )
}
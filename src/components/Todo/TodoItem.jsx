import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    // <li className='flex justify-between'><span>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)}>x</button></li>
    <li className='w-52 flex justify-between bg-[#CF9438] border-2'>
      <span>
        {/* <input type="checkbox" value={todo.id} className="m-1" /> */}
        <label htmlFor={todo.id} className="">{todo.todo}</label>
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="m-1">x</button>
    </li>
  )
}
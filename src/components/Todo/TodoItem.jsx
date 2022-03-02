import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <li className='flex justify-between'><span>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)}>x</button></li>
  )
}

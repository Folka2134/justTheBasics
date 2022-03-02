import React from 'react'

export const TodoItem = ({ todo }) => {
  return (
    <li className='flex justify-between'><span>{todo.todo}</span><button>x</button></li>
  )
}

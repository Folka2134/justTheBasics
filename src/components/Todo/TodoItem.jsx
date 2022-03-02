import React from 'react'

export const TodoItem = ({ todo }) => {
  return (
    <li><span>{todo.todo}</span><button>x</button></li>
  )
}

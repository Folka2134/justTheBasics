import React, { useContext } from 'react'

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos } = useContext(GlobalContext)

  return (
<<<<<<< HEAD
    <div className='grid'>
      <button>clear</button>
      test
=======
    <>
>>>>>>> parent of 61ab8d3... Created clear button
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
}

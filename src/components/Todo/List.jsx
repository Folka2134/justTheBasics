import React, { useContext } from 'react'

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos } = useContext(GlobalContext)

  return (
    <div className='grid'>
      <button>clear</button>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

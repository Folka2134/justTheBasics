import React, { useContext, useEffect } from 'react'

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos, getTodos } = useContext(GlobalContext)

  useEffect(() => {
    getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='grid justify-center'>
      <ul>
        {todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
      </ul>
    </div>
  )
}

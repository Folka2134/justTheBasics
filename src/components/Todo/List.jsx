import React, { useContext } from 'react'

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos } = useContext(GlobalContext)

  return (
    <>
      <ul>
        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
}

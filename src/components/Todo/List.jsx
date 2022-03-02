import React from 'react'

import { TodoItem } from "./TodoItem"

export const List = () => {
  return (
    <>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </>
  )
}

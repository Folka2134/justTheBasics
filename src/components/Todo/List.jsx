import React, { useContext } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos, clearTodo } = useContext(GlobalContext)

  return (
    <div className='grid'>
      <button onClick={() => clearTodo()} className="hover:bg-[#CF342D] transition-all duration-200 grid justify-center"><RiDeleteBin7Fill size={30} /></button>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

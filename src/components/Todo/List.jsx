import React, { useContext } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos, clearTodo } = useContext(GlobalContext)

  return (
    <div className='grid justify-center'>
      <button onClick={() => clearTodo()} className="w-60 hover:bg-[#CF2B23] border-black transition-all duration-200 grid justify-center my-1 p-2">
        <RiDeleteBin7Fill size={30} color={"hover:bg-[#CF2B23]"} />
      </button>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

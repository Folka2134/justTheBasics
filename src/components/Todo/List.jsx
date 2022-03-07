import React, { useContext } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

import { TodoItem } from "./TodoItem"

import { GlobalContext } from './context/GlobalState'

export const List = () => {
  const { todos, clearTodo } = useContext(GlobalContext)

  return (
    <div className='grid justify-center'>
      <button onClick={() => clearTodo()} className="grid justify-center w-60 my-1 p-2 hover:bg-[#CF2B23] border-black transition-all duration-200 rounded-lg">
        <RiDeleteBin7Fill size={30} color={"hover:bg-[#CF2B23]"} />
      </button>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

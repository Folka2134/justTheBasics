import React, { useState } from 'react'

// import { Input } from './Input'
// import { List } from './List'

export const Todo = () => {
  return (
    <div className='h-screen grid justify-center'>
      <div className='mt-16'>
        <Input />
        <List />
      </div>
    </div>
  )
}

function Input() {
  const [text, setText] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    // if (text.length > 1) {
    //   await todosRef.add({
    //     id: Math.floor(Math.random() * 1000000),
    //     text
    //   })
    //   e.currentTarget.reset()
    // }

  }

  return (
    <form onSubmit={onSubmit} className="border-b-2 border-black p-2">
      <input type="text" placeholder='new todo' onChange={(e) => setText(e.currentTarget.value)} />
      <button className='bg-[#0ECF55] p-2'>+</button>
    </form>
  )
}


function List() {
  const todos = []

  return (
    <div className='grid justify-center'>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

function TodoItem() {
  return (
    // <li className='flex justify-between'><span>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)}>x</button></li>
    <li className='w-60 p-1 flex justify-between bg-[#CFA904] border-2 border-[#E6D307]'>
      <span>
        {/* {todo.text} */}
        test
      </span>
      <button
        // onClick={() => deleteTodo(todo._id)} 
        className="h-8 px-2 bg-[#CEDB07] hover:bg-[#CF2B23] border-black border-2 transition-all duration-200 rounded-3xl">X</button>
    </li>
  )
}
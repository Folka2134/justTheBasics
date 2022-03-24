import React, { useState } from 'react'

export const Input = () => {
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

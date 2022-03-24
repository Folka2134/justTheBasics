import React, { useState, useContext } from 'react'
import firebase from 'firebase/compat/app'

// import { GlobalContext } from './context/GlobalState'
const firestore = firebase.firestore()

export const Input = () => {
  const [text, setText] = useState('')
  // const { addTodo } = useContext(GlobalContext)
  const todosRef = firestore.collection('messages')

  const onSubmit = async (e) => {
    e.preventDefault()

    if (text.length > 1) {
      await todosRef.add({
        uid: Math.floor(Math.random() * 1000000),
        text
      })
      e.currentTarget.reset()
    }

  }

  return (
    <form onSubmit={onSubmit} className="border-b-2 border-black p-2">
      <input type="text" placeholder='new todo' onChange={(e) => setText(e.currentTarget.value)} />
      <button className='bg-[#0ECF55] p-2'>+</button>
    </form>
  )
}

import React, { useState } from 'react'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// firebase.initializeApp({

//   apiKey: "AIzaSyDy8JADVgZDaSoNuswUXI0jLVQMoJ61sKU",

//   authDomain: "todo-list-f2c15.firebaseapp.com",

//   projectId: "todo-list-f2c15",

//   storageBucket: "todo-list-f2c15.appspot.com",

//   messagingSenderId: "637670506803",

//   appId: "1:637670506803:web:39aac6eee7056d4158fe46"

// })

// const firestore = firebase.firestore()

// import { GlobalContext } from './context/GlobalState'

export const Input = () => {
  const [text, setText] = useState('')
  // const { addTodo } = useContext(GlobalContext)
  // const todosRef = firestore.collection('messages')

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

import React, { useState } from 'react'

import { getDatabase } from 'firebase/database'
import { set, ref, onValue, remove } from 'firebase/database'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// import 'firebase/compat/auth'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDGseTVycB4ACXhR237e68ZcRP8PG5Bzmw",

  authDomain: "super-chat-8ace6.firebaseapp.com",

  projectId: "super-chat-8ace6",

  storageBucket: "super-chat-8ace6.appspot.com",

  messagingSenderId: "339361691952",

  appId: "1:339361691952:web:3c0dcdd3dfe3ff9ed670f5",

  measurementId: "G-YXRKT6DWHH"
})

const app = firebase.firestore()
const db = getDatabase(app)

export const Todo = () => {
  return (
    <div className='h-screen grid justify-center'>
      <div className='mt-16'>
        {/* <Input /> */}
        <List />
      </div>
    </div>
  )
}

function List() {

  const todosRef = app.collection('todos')
  const query = todosRef.orderBy('createdAt').limitToLast(25)
  const [todos] = useCollectionData(query, { idField: 'id' })

  const [formValue, setFormValue] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault()

    await todosRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      id: Math.floor(Math.random() * 10000000000),
    })

    setFormValue('')
  }

  return (
    <>
      <form onSubmit={onSubmit} className="border-b-2 border-black p-2">
        <input type="text" value={formValue} placeholder='new todo' onChange={(e) => setFormValue(e.currentTarget.value)} />
        <button className='bg-[#0ECF55] p-2' disabled={!formValue}>+</button>
      </form>

      <div className='grid justify-center'>
        <ul>
          {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </div>
    </>
  )
}

// console.log(firestore.collection('todos').doc(''));
function TodoItem(props) {


  const deleteTodo = async (todo) => {
    remove(ref(app, `/${todo.id}`))

  }
  return (
    <li className='w-60 p-1 flex justify-between bg-[#CFA904] border-2 border-[#E6D307]'>
      <span>
        {props.todo.text}
      </span>
      <button
        onClick={() => deleteTodo(props.todo)}
        className="h-8 px-2 bg-[#CEDB07] hover:bg-[#CF2B23] border-black border-2 transition-all duration-200 rounded-3xl">X</button>
    </li>
  )
}
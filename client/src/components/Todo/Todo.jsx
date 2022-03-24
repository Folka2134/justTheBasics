import React from 'react'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Input } from './Input'
import { List } from './List'

import { GlobalProvider } from './context/GlobalState'

firebase.initializeApp({

  apiKey: "AIzaSyDy8JADVgZDaSoNuswUXI0jLVQMoJ61sKU",

  authDomain: "todo-list-f2c15.firebaseapp.com",

  projectId: "todo-list-f2c15",

  storageBucket: "todo-list-f2c15.appspot.com",

  messagingSenderId: "637670506803",

  appId: "1:637670506803:web:39aac6eee7056d4158fe46"

})

const firestore = firebase.firestore()

export const Todo = () => {
  return (
    <div className='h-screen grid justify-center'>
      <div className='mt-16'>
        <GlobalProvider>
          <Input />
          <List />
        </GlobalProvider>
      </div>
    </div>
  )
}

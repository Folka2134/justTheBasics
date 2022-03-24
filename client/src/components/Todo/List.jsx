import React from 'react'

import { TodoItem } from "./TodoItem"

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
const firebaseConfig = {

  apiKey: "AIzaSyDy8JADVgZDaSoNuswUXI0jLVQMoJ61sKU",

  authDomain: "todo-list-f2c15.firebaseapp.com",

  projectId: "todo-list-f2c15",

  storageBucket: "todo-list-f2c15.appspot.com",

  messagingSenderId: "637670506803",

  appId: "1:637670506803:web:39aac6eee7056d4158fe46"

}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// const firestore = firebase.firestore()
// import { GlobalContext } from './context/GlobalState'


export const List = () => {
  // const { todos, getTodos } = useContext(GlobalContext)
  // const todosRef = firestore.collection('messages')
  // const query = todosRef.orderBy('createdAt').limitToLast(25)
  // const [todos] = useCollectionData(query, { idField: 'id' })
  // useEffect(() => {
  //   getTodos()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div className='grid justify-center'>
      {/* <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul> */}
    </div>
  )
}

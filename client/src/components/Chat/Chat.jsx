import React, { useState, useRef } from 'react'
import firebase from 'firebase/compat/app'

import '../../index.css'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
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

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Chat = () => {

  const [user] = useAuthState(auth)

  return (
    <div className='h-screen grid bg-indigo-800 justify-center'>
      <div className='h-[56rem] w-96 mt-16 bg-slate-100 self-center'>
        <header className='h-16 bg-gray-800 text-4xl text-[#759BD1] grid grid-cols-2 p-2'>
          <h1>Chat!</h1>
          <SignOut />
        </header>
        <div>
          {user ? <ChatRoom /> : <SignIn />}
        </div>
      </div>
    </div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()} className='text-2xl text-white hover:text-[#759BD1]'>Sign Out</button>
  )
}

function ChatRoom() {

  const dummy = useRef()

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limitToLast(25)

  const [messages] = useCollectionData(query, { idField: 'id' })



  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main className='h-[52rem]'>
        <div>
          {messages && messages.map((msg) => <ChatMessage key={msg.text} message={msg} />)}

          <div ref={dummy}></div>
        </div>
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} className='w-full' />
        <button
          type='submit'
          className='w-full'
          disabled={!formValue}
        >+</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`flex align-middle ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="profile pic" className='h-8 w-10 rounded-lg mx-2 my-5' />
      <p>{text}</p>
    </div>
  )
}
import React from 'react'
import firebase from 'firebase/compat/app'

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
          Chat!
          <SignOut />
        </header>
        <div>
          {/* <div className='bg-pink-100 h-full'>area</div> */}
          {user ? <ChatRoom /> : <SignIn />}
          {/* <ChatRoom /> */}
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

  const sendMessage = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <main>
        <div>
          <ChatMessage />
        </div>
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" className='w-full' />
        <button
          type='submit'
          className='w-full'
        // disabled={!formValue}
        >+</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  return (
    <div>
      <img src='https://api.adorable.io/avatars/23/abott@adorable.png' alt="test" />
      <p>test text</p>
    </div>
  )
}
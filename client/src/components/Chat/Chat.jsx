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
        <header className='h-16 w-full bg-gray-800 text-4xl text-[#759BD1] inline-block p-2'>
          Chat!
          {/* <SignOut /> */}
        </header>
        <div>
          <div className='bg-pink-100 h-full'>area</div>
          {/* user? <ChatRoom /> : <SignIn /> */}
        </div>
      </div>
    </div>
  )
}

// function SignIn() {

// }

// function SignOut() {

// }

// function ChatRoom() {

// }


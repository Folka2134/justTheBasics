import React from 'react'

export const Chat = () => {
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

import React, { useState } from 'react'

export const SearchBox = () => {
  const [text, setText] = useState('')


  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='enter city' onChange={(e) => setText(e.currentTarget.value)} />
    </form>
  )
}

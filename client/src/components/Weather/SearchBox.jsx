import React from 'react'

export const SearchBox = () => {

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='enter city' />
    </form>
  )
}

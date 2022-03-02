import React, { createContext, useReducer} from 'react'

import AppReducer from './AppReducer'

const initialState = {
  todos: [
    {id: 1, todo: "First note of the day"},
    {id: 2, todo: "2nd note of the day"},
    {id: 3, todo: "3rd note of the day"}
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

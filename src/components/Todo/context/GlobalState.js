import React, { createContext, useReducer} from 'react'

import AppReducer from './AppReducer'

const initialState = {
  todos: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo
    })
  }
  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteTodo,
        addTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

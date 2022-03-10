import React, { createContext, useReducer} from 'react'
import axios from "axios"

import AppReducer from './AppReducer'

const initialState = {
  todos: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  async function getTodos() {
    try {      
      const res = await axios.get('/')
      dispatch({
        type: "GET_TODOS",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error
      })
    }
  }

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
  function clearTodo() {
    dispatch({
      type: "CLEAR_TODO",
      payload: []
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        deleteTodo,
        clearTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

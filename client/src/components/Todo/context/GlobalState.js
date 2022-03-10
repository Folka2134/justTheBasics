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
      const res = await axios.get('/api/v1/todos')
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

  async function addTodo(todo) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/todos', todo, config)
      dispatch({  
        type: "ADD_TODO",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error
      })
    }
  }
  async function deleteTodo(id) {
    try {
      await axios.delete(`/api/v1/todos/${id}`)      
      dispatch({
        type: "DELETE_TODO",
        payload: id
      })
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error
      })
    }
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

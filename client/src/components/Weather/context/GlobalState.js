import React, { createContext, useReducer } from 'react'

import WeatherReducer from './WeatherReducer'

const initialState = {
  cities: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        cities: state.cities
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

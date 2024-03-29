import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}

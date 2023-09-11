import { createContext, useState } from "react"
import { VerificarSesion } from "../VerificarSesion"
import { Login } from "../form/login"

export const tokenUser = createContext()
export const Token = () => {
    const [conObtenerToken,setObtenerToken] = useState({})
    
  return (
    <tokenUser.Provider value={{conObtenerToken,setObtenerToken}}>
      <Login/>
    </tokenUser.Provider>
  )
}

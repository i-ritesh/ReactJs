import React from 'react'
import Login from './Components/Login'
import { AuthContext } from './Context/AuthContextProvider'
import { useContext } from 'react'
import {Dashboard} from './Components/Dashboard'
export default function App() {

  const {isAuth,token}=useContext(AuthContext)

  return (
    <div>
      {isAuth?<Dashboard/>:<Login/>}
        
    </div>
  )
}

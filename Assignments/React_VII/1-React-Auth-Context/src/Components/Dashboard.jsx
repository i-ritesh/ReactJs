import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'


export const Dashboard = () => {

    const {token, setIsAuth} = useContext(AuthContext)

    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button onClick={()=>setIsAuth(false)} data-testid = "logout" >LOGOUT</button>
        </div>
    )
}

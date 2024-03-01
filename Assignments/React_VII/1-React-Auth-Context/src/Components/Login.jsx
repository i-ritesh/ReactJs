import React, { useContext, useState } from 'react'
// import { AuthContext } from '../Context/AuthContextProvider'
import { AuthContext } from '../Context/AuthContextProvider';


export default function Login() {

    const {setIsAuth,setToken} =useContext(AuthContext)
    const [email,setEmail]=useState("")
    const [password,setPass]=useState("")
    

    let handleSubmit= async (e) =>{
        e.preventDefault()
        try {
            let res = await fetch('https://reqres.in/api/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
    
            let finalRes = await res.json()
            setIsAuth(true)
            setToken(finalRes.token)
            console.log(finalRes);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPass(e.target.value)}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}

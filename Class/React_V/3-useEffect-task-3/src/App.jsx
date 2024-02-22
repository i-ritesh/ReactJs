import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(function(){
    updateData()
  })


  async function updateData(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    let finalReq = await req.json()
    setData(finalReq)
  }

  return (
    <>
      {data.map((post)=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default App

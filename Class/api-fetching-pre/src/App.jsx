import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  async function updateData(){
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/todos')
      let finalData = await res.json()
      setData(finalData)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Click to fetch data</h1>
      <button onClick={updateData}>Fetch Data</button>
      {data.map((todo)=>(
        <div style={{border:'1px solid black', margin:'10px', padding:'10px'}} key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
          <p>{todo.completed?"Yes":"No"}</p>
        </div>
      ))}
    </>
  )
}

export default App

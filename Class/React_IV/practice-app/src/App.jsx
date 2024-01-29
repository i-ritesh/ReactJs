import React from 'react'
import './App.css'

function App() {

  const [count,setCount] = React.useState(100)
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={()=>{setCount(count-4)}}>Decrease</button>
    </>
  )
}

export default App

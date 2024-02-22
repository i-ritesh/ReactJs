import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  async function fetchAndUpdateData() {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      let finalRes = await res.json()
      setData(finalRes)
  }

  fetchAndUpdateData()

  return (
    <>
     
      
      {data.map((post)=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;

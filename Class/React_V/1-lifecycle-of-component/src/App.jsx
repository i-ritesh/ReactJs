import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  async function fetchAndUpdateData() {
    // Clicking on the button Get and Display post should make an API request to https://jsonplaceholder.typicode.com/posts?_limit=5
    // Get the response display as a card with id,title,body
    // use data to save the response in local state
    let req = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    let finalReq = await req.json()
    setData(finalReq)
  }

  return (
    <>
      <h1>
        Clicking on this button should fetch the data from JSON Placeholder API{" "}
      </h1>
      <button onClick={fetchAndUpdateData}>Get and Display Post</button>
      {data.map((posts)=>(
        <div key={posts.id} style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;

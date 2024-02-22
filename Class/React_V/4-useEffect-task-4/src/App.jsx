import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function(){
    fetchAndUpdateData(page)
  },[page])

  async function fetchAndUpdateData(page) {
    // complete code
    try {
      let req = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      let finalReq = await req.json()
      setData(finalReq)
    } catch (error) {
      console.log(error);
    }
  }

  console.log("third");
  return (
    <>
      <div className="pagination">
        <button
          onClick={function () {
            setPage(page - 1);
          }}
        >
          PREVIOUS
        </button>
        <p>{page}</p>
        <button
          onClick={function () {
            setPage(page + 1);
          }}
        >
          NEXT
        </button>
      </div>
      <br />
      {data.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>ID : {post.id}</p>
          <p>Title : {post.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;

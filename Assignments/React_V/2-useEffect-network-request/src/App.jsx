import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostItem from './components/PostItem'

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState([false])
  const [error, setError]=useState(null)
  const [page,setPage]=useState(1)



  useEffect(function(){
    fetchData(page)
  },[page])

  async function fetchData(page){
    try {
      setLoading(true)
      let req = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      let finalReq = await req.json()
      setData(finalReq)
    } catch (error) {
      setError(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    <h1>{page}</h1>
      <button onClick={()=>{if (page>1) {
        setPage(page-1)
      }}}>Previous</button>
      <button onClick={()=>{if (page<=10) {
        setPage(page+1)
      }}}>Next</button>
      <PostItem data={data}/>
    </>
  )
}

export default App

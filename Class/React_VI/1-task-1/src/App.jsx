import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [pro,setProducts] = useState([])

  async function loadPro(){
    try {
      let req = await fetch('https://dummyjson.com/products')
      let finalReq = await req.json()
      setProducts(finalReq.products)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <button onClick={loadPro}>GET ALL Products</button>
      {pro.map((product)=>(
        <div key={product.id}>
          <img src={product.thumbnail} alt="" />
        </div>
      ))}
    </>
  );
}

export default App;
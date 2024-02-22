import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [showComponent, setShowComponent] = useState(false)


  return (
    <>
      <button onClick={()=>setShowComponent(!showComponent)}>{showComponent ? 'Hide Timer' : 'Show Timer'}</button>
      {showComponent && <Timer/>}
    </>
  )
}

export default App

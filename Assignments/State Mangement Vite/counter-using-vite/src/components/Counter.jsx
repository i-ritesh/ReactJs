import React from "react"

let Counter=()=>{
    let [count,setCount]=React.useState(0)
    const decCount=()=>{
        setCount(count-=1)
    }
    const incCount=()=>{
        setCount(count+=1)
    }
    return(
        <>
            <button onClick={decCount} >Decrease</button>
            <h1>{count}</h1>
            <button onClick={incCount}>Increase</button>
        </>
    )
}

export default Counter
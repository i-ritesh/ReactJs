import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
    let sec = 60
  const [count, setCount] = useState(sec);
  const [puse, setPause] = useState(false)

  useEffect(function () {
    let timer;
    if(!puse && count>0){
        timer = setInterval(() => {
            if (count>0) {
              setCount((count) => count - 1);
            }
          }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [puse,count]);

  return (
    <>
      <div className="timer">
        <h2>Timer Component</h2>
        <p>Countdown: {count} seconds</p>
        <button onClick={()=>{setCount(sec);setPause(false)}}>Reset</button>
        <button onClick={()=>{setPause(puse=>!puse)}}>{puse?"Resume":"Pause"}</button>
      </div>
    </>
  );
};

export default Timer;

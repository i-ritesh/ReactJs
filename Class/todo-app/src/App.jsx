import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowTask from "../components/showTask";

function App() {


  const [tasks, setTask] = React.useState([])
  const [formState, setFormState] = React.useState({
    task:"",
    completed:false,
    author:""
  })


  let chandeHandler=(e)=>{

    let targetName = e.target.name
    let targetValue = e.target.name==="completed"?e.target.checked:e.target.value


    setFormState({
      ...formState,
      [targetName]:targetValue,
    })
  }

  let submitHandle=(e)=>{
    e.preventDefault()

    let newTaskArr = [...tasks,formState]

    setTask(newTaskArr)

  }


  return (
    <>
      <div>
        <form onSubmit={submitHandle}>
          <input type="text" name="task" placeholder="Add Task" onChange={chandeHandler} value={formState.task} />
          <br />
          <label>
            Completed : <input type="checkbox" name="completed" onChange={chandeHandler} value={formState.completed}/>
          </label>
          <br />
          <input type="text" name="author" placeholder="Add Author" onChange={chandeHandler} value={formState.author}/>
          <br />
          <button>Add</button>
        </form>
        {tasks?.map((item)=>{
          return <ShowTask  item={item} />
        })}
      </div>
    </>
  );
}

export default App;

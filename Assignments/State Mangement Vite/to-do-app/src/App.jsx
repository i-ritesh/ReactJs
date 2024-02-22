import React, { useContext, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import Colorchange from "./components/Global";

function App() {
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(0)

  const [formState, setFormState] = useState({
    number:index,
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: ""
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    
    setFormState({
      ...formState,
      [event.target.name]: event.target.name==='completed'?event.target.checked:event.target.value
    })
    console.log(formState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newI = index+1
    setIndex(newI)
    setFormState({
      ...formState,
       number:newI
    })
    // Implement logic to handle form submission+9
    let newTask = [...tasks,formState]
    setTasks(
      newTask
    )
    
  }
  
  const chager = (ids)=>{
    console.log(ids)
  }

  return (
    <>
      <div>
        <Colorchange.Provider value={chager}>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} value={formState.task}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} value={formState.completed}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
        </Colorchange.Provider>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} onTo />
      ))}
    </>
  );
}

export default App;

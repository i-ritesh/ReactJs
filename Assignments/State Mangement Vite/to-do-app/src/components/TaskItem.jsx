import { useContext } from "react";
import Colorchange from "./Global";

function TaskItem({item}) {
  
  let colorchangeer2 = useContext(Colorchange)
  return (
    <>
      <div style={{color: item.completed?'green':'red'}} >
        <span>{item.task}  </span>
        <span>{item.taskAssignedTo}  </span>
        <span>{item.completed?"completed":"Not Completed"}  </span>
        <button>Delete Task</button>
        <button onClick={() => colorchangeer2(item)}>Toggle Task</button>
      </div>
    </>
  );
}

export default TaskItem;

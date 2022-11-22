import Task from "./Task"

/*const tasks = 
[{
    id : 1,
    text : "Coucou1",
    valeur: true,
},
{
    id: 2,
    text : "coucou2",
    valeur: false,
}]
*/
const Tasks = ({tasks}) => {
    
  return (
    <div>
      {tasks.map((task)=>(
      <Task key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default Tasks

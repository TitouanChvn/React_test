import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete, onToggle}) => {
  return (
    <div className={`task ${task.valeur ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
       <h3>{task.text} <FaTimes style={{color : 'red' ,cursor: 'pointer'}}  onClick={()=>onDelete(task.id)}/></h3>
       <p>{task.content}</p>
    </div>
  )
}

export default Task

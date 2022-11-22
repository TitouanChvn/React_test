import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="task">
       <h3>{task.text} <FaTimes style={{cursor: 'pointer'}}/></h3>
       <p>{task.content}</p>
    </div>
  )
}

export default Task

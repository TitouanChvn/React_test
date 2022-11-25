import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import About from "./components/About"; 
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([{
    id : 1,
    text : "Titre d'une première tache",
    valeur: true,
    content : "description de la tache 1",
  },
  {
    id: 2,
    text : "Titre 2",
    valeur: false,
    content: "description 2",
  }])



  const name1 = 'Cookie'

const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    //console.log(id)
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, valeur : !task.valeur} : task))
  }
  return (
    <Router>
    <div className="container">
        

        
      
      <Routes>
      <Route path='/' exact element={
        <>
        <Header donné_transférée='Element' onAdd={()=>setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
        <h1>Hello world</h1>
        <h2> First react App by {name1}</h2>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
        </>
      }/>
      <Route path='/about' element={<About/>}/>
      </Routes>
        <Footer/> 
    </div>
    </Router>
  );
}

export default App;

import Header from "./components/Header"; 
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
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


  return (
    <div className="container">
        <Header donné_transférée='Element'/>
        <h1>Hello world</h1>
        <h2> First react App by {name1}</h2>


      <Tasks tasks={tasks}/>

   
    </div>
  );
}

export default App;

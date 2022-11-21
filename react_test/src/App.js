import Header from "./components/Header"; 

function App() {
  const name1 = 'Cookie'


  return (
    <div className="container">
        <Header donné_transférée='Element'/>
        <h1>Hello world</h1>
        <h2> First react App by {name1}</h2>
      


   
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// import useState
import {useState} from 'react'

function App() {
  // useState
  const [val, setval] = useState("")

  // get value
  function getVal(e){
    setval(e.target.value)
  }
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" onChange={getVal}  />
      <h2>Value is :: {val} </h2>
    </div>
  );
}

export default App;

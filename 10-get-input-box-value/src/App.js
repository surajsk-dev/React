import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  // useState for getting data
  const [data, setData] = useState(null)

  // useState for printing data
  const [print, setPrint] = useState(false)

  // function for getting value
  function getData(v)
  {
    console.warn(v.target.value)
    setData(v.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
      {/* printing data on screen */}
      {
        print?
        <h1>{data}</h1>
        :null
      }

      {/* getting data onChange of value of input box */}
      <input type="text" onChange={getData} />

      {/* getting data on button click */}
      <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;

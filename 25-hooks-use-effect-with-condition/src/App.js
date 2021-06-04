import logo from './logo.svg';
import './App.css';
import Passingstate from './Passingstate'
import Passingprops from './Passingprops'
import React,{useState} from 'react'


function App() {

  // useState
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <h1>Passing State</h1>
      <Passingstate />

      <h1>Passing Props</h1>
      <Passingprops  data={data} count={count} />
      {/* update */}
      <button onClick={()=>setData(data+1)} >Update Data</button>
            <button onClick={()=>setCount(count+1)} >Update Count</button>
    </div>
  );
}

export default App;

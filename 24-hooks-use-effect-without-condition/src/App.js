import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function App() {

  // useState
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect without consition' + 'data:: '+data +' '+'count:: ' +count)
  })

  return (
    <div className="App">

      <h1>Data : {data} </h1>
      <h1>Count : {count} </h1>     
      
      <button onClick={()=>setData(data+1)} >Update Data</button>
            <button onClick={()=>setCount(count+1)} >Update Count</button>
    </div>
  );
}

export default App;

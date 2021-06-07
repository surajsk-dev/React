import logo from './logo.svg';
import './App.css';
// import useState and useMemo 
import {useState,useMemo} from 'react'

function App() {

  // counters
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  // useMemo calls function only when count updates
  const multiCountMemo=useMemo(() => {
    console.warn('multicount')
    return count*5;
  }
, [count])
  
  return (
    <div className="App">

      <h1>useMemo in React</h1>
      <h2>Count :: {count} </h2>
      <h2>Item :: {item} </h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={()=>setCount(count+1)} >Count Update</button>
      <button onClick={()=>setItem(item*10)} >Count Update</button>

      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import User from './User'
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  function updateCount(){
    setCount(Math.floor(Math.random()*10));
  }
  return (
    <div className="App">
      <h1>Previous Props with hooks - useref and useEffect</h1>
      <User count={count} />
      <button onClick={updateCount} >Update Count</button>
    </div>
  );
}

export default App;

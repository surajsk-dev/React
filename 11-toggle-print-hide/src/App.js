import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [el, setEl] = useState(true)
  return (
    <div className="App">
      <div style={{height:'80px'}}>
      {
        el?
        <h1>Hello World</h1>
        :null
      }
      </div>
      
      <button onClick={()=>setEl(false)} style={{marginRight:'10px'}}>hide</button>
      <button onClick={()=>setEl(true)} >show</button><br /><br />
      <button onClick={()=>setEl(!el)} >Toggle</button>
    </div>
  );
}

export default App;

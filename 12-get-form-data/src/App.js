import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  // name state
  const [name, setName] = useState(null)
  const [comic, setComic] = useState(null)
  const [term, setTerm] = useState(false)

  // function 
  function getData(e){
    // no reload and no automatic form submit
    console.warn('Name:'+name,'Comic: '+comic,'Term: '+term)
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1>Form </h1>
      <form onSubmit={getData} >
        <input type="text" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <select onChange={(e)=>setComic(e.target.value)} >
          <option >Select</option>
          <option >Marvel</option>
          <option >Dc</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>setTerm(e.target.checked)} /> <span>Agree Terms and Conditions</span>
        <br /><br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default App;

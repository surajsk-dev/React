import logo from './logo.svg';
import './App.css';
// import useRef
import {useRef} from 'react'

function App() {
  const inputRef = useRef(null);

  function handleInput(){
    // getting input value
    console.warn(inputRef.current.value);

    // focus() input value
    inputRef.current.focus();
    // change color
    inputRef.current.style.color='red';
    // change bg color
    inputRef.current.style.backgroundColor='black';


  }

  return (
    <div className="App">
      <h1>useRef-Hooks</h1>
      <input type="text" ref={inputRef} />
      <button onClick={()=>handleInput()} >Update useRef</button>
    </div>
  );
}

export default App;

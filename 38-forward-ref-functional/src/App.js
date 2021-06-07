import logo from './logo.svg';
import './App.css';
// import child User
import User from './User';
// import useRef
import {useRef} from 'react';

function App() {
  const inputRef = useRef(null);
  // function to update input
  function updateInput(){
    inputRef.current.value="1000";
    inputRef.current.style.color='red'
    // inputRef.current.style.backgroundColor='black'
    inputRef.current.focus();

  }
  return (
    <div className="App">
      <h1>forwardRef in React</h1>
      <User ref={inputRef}/>
      <button onClick={updateInput} >Update Input</button>
    </div>
  );
}

export default App;

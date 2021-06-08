import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'

function App() {

  // ref for input-1
  const inputRef1 = useRef(null)
  // ref for input-2
  const inputRef2 = useRef(null)

  // fucntion for  form submit
  function submitForm(e){
    
    // prevent from loading
    e.preventDefault();
    console.warn('Input 1 value :: ',inputRef1.current.value)
    console.warn('Input 2 value :: ',inputRef2.current.value)

    const input3Val=document.getElementById('input3').value
    console.warn('Input 3 value :: ', input3Val)
  }

  return (
    <div className="App">

      <h1>Uncontrolled Component</h1>

      {/* form */}
      <form onSubmit={submitForm} >

        {/* getting input using ref */}
        <input type="text" ref={inputRef1} /> <br /><br />
        <input type="text" ref={inputRef2} /> <br /><br />

        {/* getting input using id */}
        <input type="text" id="input3" /> <br /><br />
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// useState
import React,{useState} from 'react'

function App() {
  return (
    <div className="App">
      <h1>HOC- High Order Component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

// hoc to wrap our counter with red bg
function HOCRed(props){
  return <div style={{backgroundColor:'red', width:'100px' ,padding:"10px",margin:'10px'}}><props.cmp />
  </div>
  
}

// hoc to wrap our counter with green bg
function HOCGreen(props){
  return <div style={{backgroundColor:'green', width:'100px' ,padding:"10px",margin:'10px'}}><props.cmp />
  </div>
  
}

// hoc to wrap our counter with blue bg
function HOCBlue(props){
  return <div style={{backgroundColor:'blue', width:'100px' ,padding:"10px",margin:'10px'}}><props.cmp />
  </div>
  
}



// counter component
function Counter(){
  // state for counter
  const [count, setCount] = useState(0)
  return(
    <div style={{margin:"auto"}}>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >Update</button>
    </div>
  )
}

export default App;

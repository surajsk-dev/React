import logo from './logo.svg';
import './App.css';
import React,{createRef} from 'react';

class App extends React.Component {

  constructor(){
    super()
    // creating ref with name-inputRef
    this.inputRef=createRef();
  }

  getVal() {
    console.warn(this.inputRef.current.value)
    // change color to red
    this.inputRef.current.style.color='red'
    // change bg color
    this.inputRef.current.style.backgroundColor='black'
  }

  render(){
    return (
      <div className="App">
        <h1>Ref in Class Component</h1>
        {/* manipulating input using ref */}
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getVal()} >Get Ref</button>
        
      </div>
    );
  }
  
}

export default App;

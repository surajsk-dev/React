import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User';

class App extends React.PureComponent {

  // state
  constructor(props)
  {
    super(props)
    this.state={
      count:1
    }
  }

  render(){
    {/* pure component using state */}
    // console.warn('check re-rendering')
    return (
      <div className="App">
        {/* pure component using state */}
        {/* <h1>Pure Component Count :: {this.state.count} </h1>
        <button onClick={()=>this.setState({count:this.state.count})} >Update</button> */}
        

        {/* pure component using props */}
        <User count={this.state.count}/>

        <button onClick={()=>this.setState({count:this.state.count})} >update</button>


      </div>
    );
  }
  
}

export default App;

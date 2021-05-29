import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student'

// convert app from functional component to class 
class App extends React.Component{

  // button change data create construction for useState
  constructor(){
    super()
    this.state={
      name:'Suraj'
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Props in Class Component</h1>
        {/* passing data */}
        {/* <Student name={'Suraj'} email={'suraj@test.com'} />
        <Student name={'peter'} email={'peter@test.com'} /> */}

        {/* changing data on button click */}
        <Student name={this.state.name} />
        <button onClick={()=>{this.setState({name:'Bunty'})}}>Update Name</button>
        
      </div>
    );
  }
}

export default App;

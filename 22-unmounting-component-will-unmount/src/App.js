import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React from 'react';

class App extends React.Component {

      // initial values
      constructor(props){
        super(props)
        this.state={
            show:true
        }
    }

    render(){

      return (
        <div className="App">
          {
            this.state.show?
            <Student />
            :null
    
          }
          <button onClick={()=>{this.setState({show:!this.state.show})} } >remove component </button>
        </div>
      );

    }
  
}

export default App;

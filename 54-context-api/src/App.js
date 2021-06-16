import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

// import context 
import {CommonContext} from './components/CommonContext';
// import Main Page
import Main from './components/Main'
// import UpdateButton Page
import UpdateButton from './components/UpdateButton';
// import header Page
import Header from './components/Header';
// import footer Page
import Footer from './components/Footer';

class App extends React.Component{

  // construction with state and function
  constructor(){
    super()
    // function to change color
    this.updateColor=(color)=>{
      this.setState({
        color: color
      })
    }

    // initial state
    this.state={
      color:'green',
      updateColor:this.updateColor
    }
  }
  render(){
    return(

      // pass state in provider
      <CommonContext.Provider value={this.state}>
        {/* Header */}
        <Header />
        <h1>Context with class component</h1>
        {/* main page */}
        <Main />

        {/* update button page */}
        <UpdateButton />

        {/* footer */}
        <Footer/>

      </CommonContext.Provider>

    )
  }
}

export default App;

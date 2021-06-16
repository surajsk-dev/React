import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  // useState
  const [count, setCount] = useState(1);

  // function to update state

  function updateCount(){

    // logic for random number between 1-10
    let rand = Math.floor(Math.random()*100);

    // setState has an callback function
    // setCount((prev)=>{
    //   console.log('previous values: ',prev)
    //   console.log('current value: ', rand)
    //   console.log(' prev - rand : ',prev-rand)
    //   if(prev<5){
    //     alert('previous value is low')
    //   }
    //   return rand;
    // })


    // here we are using for loop for setState but if we dont use previous state for loop increments count by only 1 where it has to increment it by 5 to over come this we have to use previous state
    for(let i=0;i<5;i++){
      
      setCount((prev)=>{
      console.log(prev)
      return prev+1
      })
    }
  }
  

  return (
    <div className="App">
      <h1>Previous State in Functional Component</h1>
      <h2>Current Value: {count} </h2>
      <button onClick={updateCount}>Update State</button>
    </div>
  );
}

export default App;

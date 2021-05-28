import logo from './logo.svg';
import './App.css';

// import student to use
import Student from './Student'
// import state
import {useState} from 'react';

function App() {
  const [name,setName ] = useState('Suraj')
  return (
    <div className="App">
      <h1>Props in react :)</h1>
      {/* passing data to student */}
      {/* <Student name={"suraj"} email={"suraj@test.com"} others={{address:"ind",phone:"000"}}/>
      <Student name={"peter"} email={"peter@test.com"} others={{address:"usa",phone:"111"}}/> */}

      {/* passing data on click button using state */}

      <Student name={name} />
      <button onClick={()=>{setName('Bunty')}}>update name</button>
    </div>
  );
}

export default App;

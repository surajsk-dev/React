import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  // useState for collecting data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  // saveUser Function to send data to api
  function saveUser(){

    // printing data that we got from fields
    console.warn("initial data",name,email,phone)

    // coverting data to object for post method
    let data={name,email,phone}
    console.warn('data after convert',data)

    // using post method to send data
    // fetch takes two arguments first api url and second object and in object it has method,headers,body 
    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      // printing  result
      console.warn(" result: ",result)

      // convert  result to json object format
      result.json().then((resp)=>{
        console.warn(resp);
        return resp;
      })
    })

  }



  return (
    <div className="App">
      <h1>Post Method: Sending data to Api</h1>

      {/* collecting data using input field */}
      <input type="text" name="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br /><br />
      <input type="text" name="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
      <input type="text" name="phone" placeholder="Enter Phone" onChange={(e)=>setPhone(e.target.value)}/><br /><br />
      {/* getting data using function saveUser */}
      <button type="button" onClick={saveUser}>Save User</button>

    </div>
  );
}

export default App;

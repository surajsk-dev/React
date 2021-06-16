import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  // useState for set data
  const [data, setdata] = useState([])

  // useState for form data
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // useState for id to update data in api
  const [userId, setUserId] = useState(null)


  // get data from api and set to setdata
  function getData() {
    fetch('http://localhost:4000/users').then((result) => {
      result.json().then((resp) => {
        console.log('resp:', resp)
        // set data useState
        setdata(resp)
      })
    })
  }

  // useEffect call getData here
  useEffect(() => {
    getData()
  }, [])


  // delete function
  function deleteData(id) {
    console.warn(id)

    fetch(`http://localhost:4000/users/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log('resp:', resp)
        // set data useState
        getData()
      })
    })

  }

  // fill Form Function
  function fillForm(id) {
    // getting data- console sample
    console.log(data[id - 1])
    // console name sample
    console.log(data[id - 1].name)
    // making data[id-1] short for simplicity
    let formData = data[id - 1]
    console.log("formData: ", formData.name)
    console.log('id:' ,formData.id)


    // set data using useState
    setName(formData.name)
    setEmail(formData.email)
    setPhone(formData.phone)
    setUserId(formData.id)
  }


  // update data in api

  function updateData(){
    // getting data on button click
    console.warn(name,email,phone,userId)

    let updatedData={name,email,phone,userId}

    // update using put method
    fetch(`http://localhost:4000/users/${userId}`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(updatedData)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getData()
      })
    })
  }

  return (
    <div className="App">
      <h1>Pre-Fill Data In Form</h1>
      <div  id='tableView'>
        <h1>Table - Data from API</h1>
        <table border='1'>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Operation</th>
            </tr>
            {/* printing data */}
            {
              data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button onClick={() => deleteData(item.id)} >Delete</button>
                      <button onClick={() => fillForm(item.id)} style={{marginLeft:10}}>Update</button>
                    </td>
                    
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* form */}
      <div  style={{margin:10}}>
        <h1>Update Data</h1>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
        <button onClick={updateData}>Update</button>
      </div>

    </div>
  );
}

export default App;

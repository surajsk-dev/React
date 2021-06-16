import logo from './logo.svg';
import './App.css';
// import
import React,{useEffect, useState} from 'react';

function App() {

  // useState for data
  const [data, setData] = useState([]);

  // getting data from api 
  function getData(){
    fetch('http://localhost:4000/users').then((result)=>{
      // data 
      console.warn("Result Resonse",result)
      // convert data to json
      result.json().then((resp)=>{
        // json data
        console.warn("resp json data",resp)
        // assigning data to useState setData
        setData(resp)
      })
    })
  }

  // calling getData function in useEffect 
  useEffect(() => {
    getData()
  }, [])


  // function for delete data
  function deleteData(id){
    fetch(`http://localhost:4000/users/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("Delete",resp)
        getData()
      })
    })

  }
  
  console.warn("data:",data)

  return (
    <div className="App">
      <h1>Delete Method With API</h1>

      {/* table to display data */}
      <div>
        <table border='1'>
          <tbody>

            {/* heading */}
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Operation</th>
            </tr>
            {
              data.map((i,key)=>{
                return( <tr key={key}>
                  <td>{key+1}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                  <td><button onClick={()=>deleteData(i.id)}>Delete</button></td>
                </tr>)
                  
                
              })
            }

            
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;

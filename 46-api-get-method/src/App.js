import logo from './logo.svg';
import './App.css';
// import useState for data , useEffect for api 
import React,{useState, useEffect} from 'react';

function App() {

  // useState
  const [data, setData] = useState([])

  // useEffect calling Api
  useEffect(() => {
    // fetching api
    fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
      // getting json 
      result.json().then((resp)=>{
        // getting data
        console.warn("data",resp)
        // setData
        setData(resp)
      })
    })
  }, [])
  return (
    <div className="App">
     <h1>API data to table using useEffect and useState</h1>
     {/* table for api data */}

     <table border='1'>
       <tbody>
         <tr>
           <th>Id</th>
           <td>Name</td>
           <td>User Name</td>
           <td>Email</td>
           <td>Address</td>
         </tr>
         {/* get data */}
         {
           data.map((item,id)=>{
             return(
               <tr key={id} >
                 <td >{item.id}</td>
                 <td>{item.name}</td>
                 <td>{item.username}</td>
                 <td>{item.email}</td>
                 <td>
                   
                   <table border='1'>
                     <tbody>
                      
                             <tr>
                               <td>Street: {item.address.street}</td>
                               <td>Suite: {item.address.suite}</td>
                               <td>City: {item.address.city}</td>
                               <td>Zipcode: {item.address.zipcode}</td>

                             </tr>
                      
                    
                     </tbody>
                   </table>
                   
                 </td>
               </tr>
             )
           })
         }
       </tbody>
     </table>
    </div>
  );
}

export default App;

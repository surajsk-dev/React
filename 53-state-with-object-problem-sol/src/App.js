import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  // useState with object
  const [data, setData] = useState({
    name:'suraj',
    age:26
  })


  return (
    <div className="App">
     <h1>State With Object Problem and Solution</h1>

     {/* update state  */}

     {/* problem with this - if we change name , age is removed and if we change age ,name is removed */}
     {/* <input type="text" value={data.name} onChange={(e)=>setData({name:e.target.value})} />
     <input type="text" value={data.age} onChange={(e)=>setData({age:e.target.value})}/> */}

     {/* solution 1 - write remaining data with setData ad below- but with this also we have problem if we have more than 2 values it becomes deficult to write and maintain */}
     {/* <input type="text" value={data.name} onChange={(e)=>setData({age:data.age,name:e.target.value})} />
     <input type="text" value={data.age} onChange={(e)=>setData({name:data.name,age:e.target.value})}/> */}

     {/* solution 2- put three dots with object (...data) */}
     <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
     <input type="text" value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
     
     {/* object access */}
     <h2>Name: {data.name} </h2>
     <h2>Age: {data.age} </h2>
    </div>
  );
}

export default App;

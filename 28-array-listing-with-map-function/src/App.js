import logo from './logo.svg';
import './App.css';

function App() {

  // const students=['suraj','bunty','peter','shiva']

  // students.map((data)=>{
  //   console.warn('map: '+data)
  // })

  // for(let i=0;i<students.length;i++){
  //   console.log('for'+ students[i])
  // }

  // array with object
  const students=[
    {
      name:'suraj',
      email:'suraj@test.com',
      phone:999
    },
    {
      name:'shiv',
      email:'shiva@test.com',
      phone:888
    },
    {
      name:'peter',
      email:'peter@test.com',
      phone:111
    }
  ]

  
  return (
    <div className="App">
      <h1>Array Listing with map function</h1>
      
        <table border='1'>
          
            <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            </tr>
            {
              students.map((data)=>
                
                { 

                 return(<tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                  </tr>
              )
                  }
                
              )
            }
          
          
        </table>
      
    </div>
  );
}

export default App;

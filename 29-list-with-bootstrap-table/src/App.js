import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'

function App() {

  // array with data
  const users=[
    {
      name:'suraj',
      email:'suraj@test.xyz',
      contact:1234
    },
    {
      name:'Bruce',
      email:'bruce@test.xyz',
      contact:2546
    },
    {
      name:'Peter',
      email:'peter@test.xyz',
      contact:2897
    },
    {
      name:'Tommy',
      email:'tommy@test.xyz',
      contact:1234
    }
  ]
  return (
    <div className="App">
      <h1>List Table with Bootstrap Table</h1>

      {/* table */}
      <div>
      <Table  striped bordered variant="dark"  >
        {/* tbody */}
        <tbody>

      
        <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              </tr>
            
      {
        // adding key
        users.map((data,i)=>{
          return(
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        })
      }
      </tbody>
      </Table>
      </div>
    </div>
  );
}

export default App;

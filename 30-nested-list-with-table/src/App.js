import logo from './logo.svg';
import './App.css';
// bootstrap table
import {Table} from 'react-bootstrap'

function App() {

  // nested array
  const users = [
    {
      name:'Tommy',
      email:'tommy@test.xyz',
      contact:[
        {
          hno:245,
          city:'Birmingham',
          country:'UK'
        }
      ]
    },
    {
      name:'Grace',
      email:'grace@test.xyz',
      contact:[
        {
          hno:245,
          city:'Birmingham',
          country:'UK'
        }
      ]
    },
    {
      name:'Arthur',
      email:'arthur@test.xyz',
      contact:[
        {
          hno:246,
          city:'Birmingham',
          country:'UK'
        }
      ]
    }
  ]

  return (
    <div className="App">
     <h1>Nested List</h1>

     <Table bordered variant='dark'>
       <tbody>
         <tr>
           <td>S.No</td>
           <td>Name</td>
           <td>Email</td>
           <td>Address</td>
         </tr>

         {
           users.map((data,i)=>{

            return(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table bordered variant='dark'>
                  <tbody>
                    {
                      data.contact.map((item)=>{
                        return (
                          <tr>
                            <td>{item.hno}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </td>
            </tr>)

           })
         }
         
       </tbody>
     </Table>
     
    </div>
  );
}

export default App;

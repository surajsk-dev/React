import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const users=[
    {
      name:'Tommy',
      email:'tommy@test.xyz'
    },
    {
      name:'Grace',
      email:'grace@test.xyz'
    },
    {
      name:'Arthur',
      email:'arthur@test.xyz'
    }
  ]
  return (
    <div className="App">

      {
        users.map((data)=>{
          return(
           <User data={data}/>
          )
        })
      }
      
    </div>
  );
}

export default App;

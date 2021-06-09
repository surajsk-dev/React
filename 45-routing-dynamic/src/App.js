import logo from './logo.svg';
import './App.css';

// import User Component
import User from './User';

// import routing components
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

function App() {

  // users
  let users=[
    {
      id:1,
      name:'Tommy',
      email:'tommy@test.com',
      address: 'Birmingham'
    },
    {
      id:2,
      name:'Grace',
      email:'grace@test.com',
      address: 'Birmingham'
    },
    {
      id:3,
      name:'Polly',
      email:'polly@test.com',
      address: 'Birmingham'
    },
    {
      id:4,
      name:'Arthur',
      email:'arthur@test.com',
      address: 'Birmingham'
    }
  ]

  return (
    <div className="App">

      <Router>
      <h1>Dynamic Routing</h1>

      {/* menu dynamic with Link  */}
      {
        users.map((item,key)=>{
          return(
          <ul key={key}>
            <li>
              <Link to={'/user/' + item.id+'/'+item.name + '/' + item.address}>
                {item.name}
              </Link>
            </li>
          </ul>
          )
        })
      }

      {/* switch for first match */}
      <Switch>

        {/* Route to connect ui and link */}
        <Route path='/user/:id/:name/:address'>
          <User />
        </Route>

      </Switch>

      </Router>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  return (

    // wrap router for sync with ui and url
    <Router>
      <div className="App">
        {/* link for url like anchor tag */}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
        </ul>

        {/* switch for only first match */}
        <Switch>
          {/* route for component to link and exact for exact match*/}
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About /></Route>
          
        </Switch>
        

      </div>
    </Router>

  );
}


function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores fugiat necessitatibus, optio nostrum veritatis unde enim autem iusto accusantium inventore ducimus soluta hic sunt, natus temporibus facilis? Vel voluptatum nobis tempore! Omnis, id!</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores fugiat necessitatibus, optio nostrum veritatis unde enim autem iusto accusantium inventore ducimus soluta hic sunt, natus temporibus facilis? Vel voluptatum nobis tempore! Omnis, id!</p>
    </div>
  )
}

export default App;

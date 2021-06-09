import logo from './logo.svg';
import './App.css';
// import Link, Switch, Route
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home'
import About from './About';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      {/* menu */}
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/about' >About</Link>
        </li>
        {/* no link page */}
        <li>
          <Link to='/contact' >Contact</Link>
        </li>
      </ul>

      {/* switch for first match */}
      <Switch>

      {/* route for component to link url */}
      {/* exact for exact match */}
      <Route exact={true} path='/' ><Home /></Route>
      <Route path='/about' ><About /></Route>

      {/* 404 page if page does not exist */}
      <Route path='*' ><PageNotFound /></Route>

      </Switch>



    </div>
  );
}

export default App;

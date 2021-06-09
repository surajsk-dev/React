import logo from './logo.svg';
import './App.css';
// import Nav
import Nav from './Nav'

// import Home and About
import Home from './Home'
import About from './About';


// import
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact={true} path='/' ><Home /></Route>
        <Route exact={true} path='/about' ><About /></Route>
      </Switch>
    </div>
  );
}

export default App;

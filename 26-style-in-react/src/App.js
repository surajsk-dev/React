import logo from './logo.svg';
import './App.css';
import './style.css';
import style from './custom.module.css'

function App() {
  return (
    <div className="App">
      <h1 className= 'primary' >Normal way css</h1>
      <h1 style={{color:'green',backgroundColor:'black'}} >Inline Css</h1>
      <h1 className={style.success}>Module Css</h1>
    </div>
  );
}

export default App;

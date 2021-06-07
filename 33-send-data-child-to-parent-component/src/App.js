import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  // function
  function parentAlert(data){
    console.log(data)
    alert("check console")
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      {/* child component */}
      <User alert={parentAlert} />
    </div>
  );
}

export default App;

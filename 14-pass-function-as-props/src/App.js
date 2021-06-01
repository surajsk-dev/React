import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  function updateData(){
    alert('from app component')
  }
  return (
    <div className="App">
      <h1>Pass Function as Props</h1>
      <User data={updateData} />
    </div>
  );
}

export default App;

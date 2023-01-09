import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {Register}from './components/Register';
import {Menu} from './components/Menu'
function App() {
  return (
    <>
    <div className="App">
      <Menu/>
      <Login/>
      <Register/>
    </div>
    </>
  );
}

export default App;
